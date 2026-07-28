import sys, json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from pathlib import Path

extraction = json.loads(Path('graphify-out/.graphify_extract.json').read_text(encoding='utf-8'))
detect_path = Path('graphify-out/.graphify_detect.json')
try:
    detection = json.loads(detect_path.read_text(encoding='utf-8-sig'))
except:
    detection = json.loads(detect_path.read_text(encoding='utf-8'))
analysis = json.loads(Path('graphify-out/.graphify_analysis.json').read_text(encoding='utf-8'))

G = build_from_json(extraction, root='e:\\Fiverr\\Gig\\Gig 9\\Orders\\Project 0013\\website\\circlularflow', directed=False)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}

labels = {
    0: "UI Components & Sections",
    1: "TS Compiler Options",
    2: "Dev Dependencies",
    3: "Layout & Navigation",
    4: "Dependencies",
    5: "TS Config Includes",
    6: "Package Scripts",
    7: "Featured Experiences Section",
    8: "ESLint Config",
    9: "Next.js Config",
    10: "PostCSS Config"
}

questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, analysis['gods'], analysis['surprises'], detection, tokens, 'e:\\Fiverr\\Gig\\Gig 9\\Orders\\Project 0013\\website\\circlularflow', suggested_questions=questions)
Path('graphify-out/GRAPH_REPORT.md').write_text(report, encoding='utf-8')
Path('graphify-out/.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}, ensure_ascii=False), encoding='utf-8')
print('Report updated with community labels')
