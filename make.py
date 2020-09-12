from jinja2 import Environment, FileSystemLoader, select_autoescape
import json


def main():

    with open('assets/db/phd_students.json', 'r') as f:
        phd_students = json.load(f)
    with open('assets/db/phd_collaborators.json', 'r') as f:
        phd_collaborators = json.load(f)
    with open('assets/db/undergrad_students.json', 'r') as f:
        undergrad_students = json.load(f)
    with open('assets/db/paper.json', 'r') as f:
        papers = json.load(f)
    with open('assets/db/patent.json', 'r') as f:
        patents = json.load(f)
    with open('assets/db/tutorial.json', 'r') as f:
        tutorials = json.load(f)
    with open('assets/db/software.json', 'r') as f:
        softwares = json.load(f)
    with open('assets/db/award.json', 'r') as f:
        awards = json.load(f)
    with open('assets/db/job.json', 'r') as f:
        jobs = json.load(f)
    with open('assets/db/teaching.json', 'r') as f:
        teaching = json.load(f)
    with open('assets/db/news.json', 'r') as f:
        news = json.load(f)
    with open('assets/db/education.json', 'r') as f:
        educations = json.load(f)
    with open('assets/db/service_pc.json', 'r') as f:
        service_pcs = json.load(f)
    with open('assets/db/service_epc.json', 'r') as f:
        service_epcs = json.load(f)
    with open('assets/db/service_oc.json', 'r') as f:
        service_ocs = json.load(f)
    with open('assets/db/service_journal.json', 'r') as f:
        service_journals = json.load(f)

    env = Environment(
        loader=FileSystemLoader('assets/templates'),
        autoescape=select_autoescape(['html', 'xml']))

    #index.html
    template = env.get_template('template_index.html')
    rendered = template.render(
        papers=papers,
        tutorials=tutorials,
        awards=awards,
        educations=educations,
        jobs=jobs,
        softwares=softwares,
        teaching=teaching,
        news=news,
        service_pcs=service_pcs,
        service_epcs=service_epcs,
        service_ocs=service_ocs,
        service_journals=service_journals,
        page='index')

    with open('index.html', 'w') as f:
        f.write(rendered)

    #publication.html
    template = env.get_template('template_publication.html')
    rendered = template.render(
        papers=papers,
        patents=patents,
        page='publication')
    with open('publication.html', 'w') as f:
        f.write(rendered)

    #software.html
    template = env.get_template('template_software.html')
    rendered = template.render(
        softwares=softwares,
        page='software')
    with open('software.html', 'w') as f:
        f.write(rendered)

    #students.html
    template = env.get_template('template_students.html')
    rendered = template.render(
        phd_students=phd_students,
        phd_collaborators=phd_collaborators,
        undergrad_students=undergrad_students,
        page='students')
    with open('students.html', 'w') as f:
        f.write(rendered)

    #teaching.html
    template = env.get_template('template_teaching.html')
    rendered = template.render(
        teaching=teaching,
        tutorials=tutorials,
        page='teach')
    with open('teaching.html', 'w') as f:
        f.write(rendered)

    #service.html
    template = env.get_template('template_service.html')
    rendered = template.render(
        service_pcs=service_pcs,
        service_epcs=service_epcs,
        service_ocs=service_ocs,
        service_journals=service_journals,
        page='service')
    with open('service.html', 'w') as f:
        f.write(rendered)
    
    #awards.html
    template = env.get_template('template_awards.html')
    rendered = template.render(
        awards=awards,
        page='awards')

    with open('awards.html', 'w') as f:
        f.write(rendered)

    #news.html
    template = env.get_template('template_news.html')
    rendered = template.render(
        news=news,
        page='news')

    with open('news.html', 'w') as f:
        f.write(rendered)
    # Following pages has been merged to index.html

    # # award.html
    # template = env.get_template('template_award.html')
    # rendered = template.render(papers=papers, tutorials=tutorials, awards=awards, \
    # educations=educations, jobs=jobs, softwares=softwares, teaching=teaching, \
    # news=news,\
    # service_pcs=service_pcs, service_ocs=service_ocs, service_journals=service_journals)
    # with open('award.html', 'w') as f:
    # f.write(rendered)

    # #software.html
    # template = env.get_template('template_software.html')
    # rendered = template.render(
    #     papers=papers,
    #     tutorials=tutorials,
    #     awards=awards,
    #     educations=educations,
    #     jobs=jobs,
    #     softwares=softwares,
    #     teaching=teaching,
    #     news=news,
    #     service_pcs=service_pcs,
    #     service_ocs=service_ocs,
    #     service_journals=service_journals)
    # with open('software.html', 'w') as f:
    #     f.write(rendered)


if __name__ == '__main__':
    main()
