# Data Commons Scotland: A scrapbook of prior work


## Definitions and opinions


### Open Data

* [Wikipedia: Open data](https://en.wikipedia.org/wiki/Open_data)
    * "is the idea that some data should be freely available to everyone to use and republish as they wish, without restrictions from copyright, patents or other mechanisms of control"
    * "the term 'open data' itself is recent, gaining popularity with the rise of the Internet and [...] especially, with the launch of open-data government initiatives"
    * "Open data can also be Linked Data; when it is, it is Linked Open Data."
* [Open Data Handbook: What is Open Data?](http://opendatahandbook.org/guide/en/what-is-open-data/)
    * "Open data is data that can be freely used, re-used and redistributed by anyone - subject only, at most, to the requirement to attribute and sharealike."
* [The World Bank: Open Data Essentials](http://opendatatoolkit.worldbank.org/en/essentials.html)
    * "Data or content is open if anyone is free to use, re-use or redistribute it, subject at most to measures that preserve provenance and openness."
    * Two dimensions: 
      * "The data must be legally open, which means they must be placed in the public domain or under liberal terms of use with minimal restrictions"
      * "The data must be technically open, which means they must be published in electronic formats that are machine readable and non-proprietary"


## Case studies and reviews of installations

* [Open Data activity of selected UK councils](http://www.nomoregrapes.com/wp-content/uploads/2016/03/nmg-council-opendata-research-20160304.pdf)
    * "Backing of policy and commitment needs to be done first with open data releases. Events which encourage discussion and use of the data should be followed by promotion of any work done. This chain of actions then starts a circle of specific open data requests, releases, and use. Into a moving circle will come data programmers, and analysts, other professionals, and citizens that connect with the council and the professionals. Naturally, an authority's open data work will become celebrated further a eld by both internal sta  and external individuals/businesses involved."
* [Ontology Engineering at Scale for Open City Data Sharing](https://www.slideshare.net/ocorcho/ontology-engineering-at-scale-for-open-city-data-sharing)
    * "Poster boards" were early 'open data'!
    * Believes that the definition and maintenance of ontologies is the crux.
    * "Choose your datasets" sparingly; "annotate semantically so other can understand"; "produce your data in different formats"; "eat your own dog food"; 
* [Wikipedia: Waste in the UK](https://en.wikipedia.org/wiki/Waste_in_the_United_Kingdom)
     * "In Scotland in 1993, 14 million tons of waste was produced. 100,000 tons was toxic waste and 260,000 tons was controlled waste from other parts of Britain and abroad. 45% of the special waste was in liquid form and 18% was asbestos - radioactive waste was not included. Of the controlled waste, 48% came from the demolition of buildings, 22% from industry, 17% from households and 13% from business - only 3% were recycled. Ninety percent of controlled waste was buried in landfill sites and produced 2 million tons of methane gas. 1.5% was burned in incinerators and 1.5% were exported to be disposed of or recycled. There are 900 disposal sites in Scotland."
* The Irish government's [Open Data Strategy for 2017-2022](https://data.gov.ie/sites/default/files/files/Final%20Strategy%20online%20version(1).pdf)
    * Introduced by the "Minister of State with responsibility for Public Procurement, Open Government and eGovernment".
    * Their [Open Data Technical Framework](https://data.gov.ie/pages/opendatatechnicalframework) starts with the need for a technical framework, before summarising the key considerations when publishing open data. In the main, it recommends: data formats; metadata schema; standards for respresenting values.
* [WikiMedia - RFC - How to deal with open datasets](https://meta.wikimedia.org/wiki/Requests_for_comment/How_to_deal_with_open_datasets)
    * "on Wikidata contributors and data coexist to create semantic structures that can be queried in several ways. Adding too much data, might make data curation impossible"
    * "a few possibilities, ours could e.g. be editable/correctable, discussable on wiki (i.e. datasets will have talk pages), easily integrate into visualisation plugins for Wikipedia articles (see the planned Vega Visualisation Plugin), accept and archive live feeds, plus hooks into Wikidata's semantic information might make sets of datasets more useful/powerful"

## Instances

* [data.gov.uk](data.gov.uk)
    * "does not host datasets. Instead, you must first publish the dataset (or supporting document) on your organisation?s website or on GOV.UK. You can then add the dataset to data.gov.uk, which will display a description and a link to the dataset."
* [data.gov.ie](https://data.gov.ie)
* [Ian's list of Scottish Open Data instances](https://github.com/watty62/SOD)
* [Ewan Klein's list of Scottish Open Data catalogues](http://okfnscot.github.io/open-data-scotland/)
* [Stirling Council's open data portal](https://data.stirling.gov.uk/dataset)
* [Urban Big Data Centre](http://ubdc.gla.ac.uk)
* Iceland's [COVID-19 data site](https://www.covid.is/data) is user friendly.
* [statistics.gov.scot](https://statistics.gov.scot) makes many useful datasets available as linked open data. Its datasets include some (e.g. Household Waste and Population) that are core to providing data about waste in Scotland.
* [This RDF based platform](https://semantic.eea.europa.eu/) of the European Environment Agency, seems very impressive.

## Tools

   * [Wikidata](https://www.wikidata.org)
      * "Wikidata is a free and open knowledge base that can be read and edited by both humans and machines. Wikidata acts as central storage for the structured data of [...]"
      * "Wikidata records not just statements, but also their sources, and connections to other databases."
      * "Wikidata uses a Linked Open Data format to store data"
      * [Linked Data](https://en.wikipedia.org/wiki/Linked_data)
         * "Linked data may also be open data, in which case it is usually described as Linked Open Data"
            * [Some ideas](https://www.cs.toronto.edu/~oktie/slides/publishing-relational-databases-as-linked-data.pdf) for converting tabular data into linked data. 
            * [Structure-First Data Modeling The Losing Battle of Perfect Descriptions](https://www.semanticarts.com/structure-first-data-modeling-the-losing-battle-of-perfect-descriptions/) that calls triplestore-type databases "meaning first" - but these too have a lot of "structure first". 
            * [The RDF Data Cube Vocabulary](https://www.w3.org/TR/vocab-data-cube/) as used by statistics.gov.scot .
            * [Challenges on Developing Tools for Exploiting Linked Open Data Cubes](https://pdfs.semanticscholar.org/f057/e02b0a936e09bbea1cc58b26772fe52cf7a7.pdf) says:
              * value from open data cubes lies in how easy they are to combine and analyse at the web scale
              * adoption of the RDF data cube vocabulary helps but there is still room for ambiguity, silo-ed concepts and differences in approach
              * end users (and their tools) still like to consume easier representations.
              * Related:
            * [OpenCube Project and OpenCube Toolkit: slides and recordings](https://lists.w3.org/Archives/Public/public-lod/2015Oct/0016.html) 
         * [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework)
            * "Part of the vision of Linked Data is for the Internet to become a global database"
   * [SPARQL query service](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/Wikidata_Query_Help)
      * [Ian's plaques in Aberdeen blog](https://codethecity.org/2020/01/13/aberdeen-plaques-part-two/)
      * [SQARQL Cheatsheet](http://www.iro.umontreal.ca/~lapalme/ift6281/sparql-1_1-cheat-sheet.pdf)
   * [What is the difference between Wikidata and DBpedia?](https://www.quora.com/What-is-the-difference-between-Wikidata-and-DBpedia)
      * DBpedia unlies the [BBC's Dynamic Semantic Publishing](https://www.bbc.co.uk/blogs/bbcinternet/2012/04/sports_dynamic_semantic.html)
      * "Why blend logic with data on the web? [...] Machines need the description logic where the data is to be able to integrate it and tie the data silos together."
      * "DBpedia is a fundamental part of the connective tissue of the contextual/semantic Web, a.k.a. the Linked Open Data cloud, a.k.a. the Web of Data. It brings Wikipedia and all the value of its crowdsourced updates to data description. Data description is essential to machine learning.  Machines are dumb, and they need to be told how to retrieve relevant data, process it and deliver it to the place where it's most relevant. Ontologies--descriptions of data domains--help with this kind of handholding."
   * [What Happened to the Semantic Web](http://david.portnoy.us/category/semantic-web/) discusses problems with the "SemWeb", e.g. people prefer natural language framed queries (backed by ML) over SPARQL; SemWeb "too rigid to effectively keep up with today?s rate of data creation and structural evolution"; "ontological silos"; "lack of clear commercial benefits".
   * [CKAN](https://ckan.org/about/)
      * "a tool for making open data websites. [...] helps you manage and publish collections of data"
      * [Extensions](https://github.com/ckan/ckan/wiki/List-of-extensions)
        * [harvest](https://github.com/ckan/ckanext-harvest/)
        * [DCAT](https://github.com/ckan/ckanext-dcat)
        * [jackan](http://opendatatrentino.github.io/jackan/)
        * [ckan4j](https://extensions.ckan.org/extension/ckan4j/)
      * [Datopian](http://tech.datopian.com/) - a company used by Stirling Council and the Data Cluster project, that has expertise in hosting and customising CKAN based systems. 
        * It overviews its "Next Gen" version of CKAN.
        * It is the company behind [Datahub](https://datahub.io/).
   * [Prototype tools/models for digitally tracking waste](https://defradigital.blog.gov.uk/2019/05/13/smart-waste-tracking-challenge-are-we-any-closer-to-solutions/)
   * [Socrata](https://www.tylertech.com/products/socrata)
      * "Data-Driven Innovation for Government [...] puts data at the heart of every government program and revolutionizes internal data sharing"
      * "Break down silos and encourage collaboration"
      * "Transform data into insights with visualizations and performance measurements"
   * [https://app.gistapp.com/visualizations](Gist Sofware)
      * "Share analysis by embedding visualizations into reports and articles."
   * [Neo4j graph gists](https://neo4j.com/graphgists/)
* [Open Ownership: Identity & identifiers: what we?ve learned](https://www.openownership.org/news/identity-and-identifiers-what-weve-learned/)
   * "the beneficial ownership standard needs to be able to identify legal entities and help users to identify natural persons"
* [Idra](https://www.slideshare.net/FI-WARE/fiware-global-summit-idra-a-solution-for-open-data-interoperability)
   * "Idra is a web application able to federate existing Open Data Management Systems (ODMS) based on different technologies providing a unique access point to search and discover open datasets coming from heterogeneous sources. Idra uniforms representation of collected open datasets, thanks to the adoption of international standards (DCAT-AP) and provides a set of RESTful APIs to be used by third party applications.

     Idra supports natively ODMS based on CKAN, DKAN, Socrata, Orion Context Broker (NGSI v2) and many other technologies: Idra provides also a set of APIs to federate ODMS not natively supported. In addition, it is possible to federate generic open data portals, that don't expose an API, using the web scraping functionality or providing a dump file of the datasets in DCAT-AP format. Moreover Idra provides a SPARQL endpoint in order to perform queries on 5 stars RDF linked open data collected from federated ODMS and allows to easily create charts based on federated open datasets."
   * [Google's public data explorer](https://www.google.com/publicdata/explore?ds=ltjib1m1uf3pf_&ctype=l&met_y=waste_t1a#!ctype=l&strail=false&bcs=d&nselm=h&met_y=waste_t1a&scale_y=lin&ind_y=false&rdim=country_group&idim=country_group:oecd:non-oecd&idim=country:GBR:CHE:CHN:USA&ifdim=country_group&hl=en_US&dl=en_US&ind=false)
   * [Tidy Data format](http://vita.had.co.nz/papers/tidy-data.pdf)
   * [OpenCube Toolkit](http://opencube-toolkit.eu/)
   * Swirrl's [table2qb](https://github.com/Swirrl/table2qb)

# Additional tools

* [Recommender systems](https://en.wikipedia.org/wiki/Recommender_system) ...based on: behaviours/choices of similar users ("collaberative filtering"); objects with similar attributes ("content-based fitering"); machine inferencing.
   * [Building one in Python](https://www.analyticsvidhya.com/blog/2016/06/quick-guide-build-recommendation-engine-python/)
* [A Git for data?](https://opendata.stackexchange.com/questions/748/is-there-a-git-for-data#752) is a _discussion_ about using something as solid, accessible and simple as Git to store open data. Some of Git's shortcommings WRT changing, for example, CSV columns might be worked around by using, say, YAML as the data format. Its unsuitability for huge datasets is more intrinsic. 

# Waste Data

* What aspects of this our we interested in for the purpose of this project?
   * Tracking waste end-to-end?
      * Recording handovers; digital tags to help automate data input; classification and quantification.
   * Publishing council waste collection information?
      * ...in a more usable way; better route info; better waste classification info.
* [Presentation about Vastum](https://defradigital.blog.gov.uk/2019/05/13/smart-waste-tracking-challenge-are-we-any-closer-to-solutions/)
   * "at the moment we have only regulatory datasets that can't be matched to each other"
   * no oversight of transfer notes so wste goes 'missing'
* [The story of waste management in the UK](https://www.youtube.com/watch?v=-C6v_X_FtWI)
   * Be in a better place for another _sea change_ in waste management a la the one brought about by the 1950s Clean Air Act which resulted in a change of the composition of the household bin ...half the weight but bulkier trash because of 1950s end-of-austerity and the rise of the self-service shop in which goods where packaged.
* [My Recycling Wales](https://myrecyclingwales.org.uk/) is a pretty site that provides information about how/where Welsh waste is processed. It gets its data from [Waste Data Flow](https://www.wastedataflow.org).
* [This article](https://resource.co/article/uk-local-authority-league-table-201819-right-track) is from a magazine called _resource.co_ that contains nice data-backed articles about waste. 


## Opportunities

* [Open Data Institute: Open standards and open APIs](https://theodi.org/topic/open-standards-and-open-apis/)
    * "When open data is standardised and uses an open API, it's easier to read and access, creating opportunities for startups, researchers and communities to innovate with it."
* The 9 year old [Christie Commission Report](https://www.gov.scot/publications/commission-future-delivery-public-services/) has messages in it that back our DCS participatory design and open data approaches:
    * "ensure that our public services are built around people and communities, their needs, aspirations, capacities and skills, and work to build up their autonomy and resilience"
    * "improve transparency and consistency"


## Requirements

* [Open Data Platform Requirements](https://www.odcamp.uk/open-data-platform-requirements/)
   * "from deeply technical requirements to ways to help citizens find and use data relevant to them"
   * "pull out information items that related to an issue of interest that were included in different data sets"
   * "enthusiasm for forums and feedback"
   * "demystifying the data"
   * "adding contextual information to the data sets"
   * e.g. "newspaper articles, that would explain why the data might matter", "signposts, such as colour-coding for data sets" 
   * "providing a really big search box that works really well"
   * "You need something really technical and you need something that looks nice. You don?t want something that?s so tough only a few people use it, but you don?t want it to look really nice but to have nothing behind it."

* [GovEx Labs: Open Data Portal Requirements](https://labs.centerforgov.org/open-data/portal-requirements/)
   * "sample requirements to help governments evaluate, develop (or procure), deploy, and launch an open data web site (portal)"
   * 

* [NYC Open Data: Policy and Technical Standards Manual](https://www1.nyc.gov/assets/doitt/downloads/pdf/nyc_open_data_tsm.pdf)
   * Pushing openess: "All public data sets must be considered open unless they contain information designated as sensitive, private, or confidential as defined by [...]".


* Requirements distilled into stand-alone features

   * Associate a data set with a schema
   * Validate uploads/against schema

   * Timestamp rows
   * Keep history

   * Table view
   * Form/page view focussing on an entity

   * Link the data a la RDF
   * Locally cache aspects of remote data

   * Provenance and other metadata (perhaps as linked data)

   * Alerts about updates
   * Alerts about changes of interest

   * Plot against time
   * Plot on a map
   * Display as an image grid

   * Stats

   * Use ML to look for correlations 

   * Readable by all humans
   * (Auth'd) community input

   * Readable by machines because of the use of standard representations
   * (Auth'd) updatable by machines

   * Searchable: structure query languages

   * Searchable: stylised language, textual
   * Searchable: stylised language, audio

   * Searchable: natural language, textual
   * Searchable: natural language, audio

   * Scalable WRT rows per table (or subject-attribute pairs)
   * Scalable WRT table joining/cross linking
   * Scalable WRT (hyper)linking to data in remote repos

   * Snapshot-able for backups, copies, etc.






