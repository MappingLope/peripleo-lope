[<img title="Pelagios Network" src="./logos/pelagios.svg" height="60" align="left">](https://pelagios.org/)

# Peripleo | Mapping Lope: A Cartographic Exploration of the Comedia Nueva 🌍

_Mapping Lope: A Cartographic Exploration of the Comedia Nueva_ (2025-2027) is a post-doctoral research project supported by a [Postdoc.Mobility grant](https://data.snf.ch/grants/grant/235122) from the Swiss National Science Foundation (SNSF). It is being carried out by Miguel Betti at the PROLOPE Group (Universitat Autònoma de Barcelona) under the supervision of Prof. Sònia Boadas (Thal-IA - UAB).

Combining Philology, Literary Geography, and machine learning, the project uses Digital Humanities tools to analyze the use of place names (toponyms) in Lope de Vega’s plays. It aims to reassess the link between theater genres and geography, and to explore how toponyms reflect the political and cultural context of Lope’s time. Through the automated extraction of place names, as well as the creation of interactive maps, graphs, and statistical analyses, the project offers new insights into the role of space in Spanish Golden Age drama.

This [map](https://mappinglope.github.io/peripleo-lope) shows the names of the places detected with machine learning in 364 plays. With this visualisation, users can search places and filter them by genre, subgenre, title, date, etc.

Peripleo is a prototype application for the discovery and spatial visualisation of collection data, originally an initiative of the Pelagios Network and developed early in 2022 as part of the British Library's Locating a National Collection project (LaNC).

![Preview of the map of the projet](map_preview.png)


## LinkedPlaces Data

Our [LP-Format](https://github.com/LinkedPasts/linked-places-format) data can be found [here](https://github.com/MappingLope/peripleo-lope/tree/main/docs/data). To extract the place names in our corpus we have developed our own [NER model](https://github.com/MappingLope/LOPE_NER).

## Code Reuse

Our javascript implementation of Peripleo can be found [here](https://github.com/MappingLope/peripleo-lope/tree/main/src). It is a slightly different version from the original Peripleo.

## Installation

See the *Peripleo* instructions for the visualisation of your own geospatial data:
1. the [Installation Guide](https://github.com/britishlibrary/peripleo/blob/main/README.md), and
2. the [Configuration Guide](https://github.com/britishlibrary/peripleo/blob/main/Configuration-Guide.md).
