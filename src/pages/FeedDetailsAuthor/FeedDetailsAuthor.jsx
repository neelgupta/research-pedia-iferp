import { useEffect, useState } from "react";
import "./FeedDetailsAuthor.scss";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { icons } from "@/utils/constants";
import { handleCopy } from "@/utils/helpers";
import { Button, TextInput } from "@/components";
import SecondDetails from "./SecondDetails";
import PackageDetails from "./PackageDetails";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedPapersById } from "@/store/userSlice/projectSlice";
import moment from "moment";
import { getAuthorsPapers } from "@/store/userSlice/userDetailSlice";
import { Spinner } from "react-bootstrap";

const FeedDetailsAuthor = () => {
  const [showActive, setShowActive] = useState("Summary");
  const [isSide, setIsSide] = useState(false);
  const [paperDetails, setPaperDetails] = useState({});
  const [showAuthors, setShowAuthors] = useState(false);
  const [showCitation, setShowCitation] = useState(false);
  const [AutherIddetispaper, setAutherIddetispaper] = useState("");
  const [summaryloadder, setsummaryloadder] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const topics = location?.state?.topics;


  const fetchPaper = async () => {
    setsummaryloadder(true);
    const id = location?.state;
    const paperId = id.paperId;
    const abstractId = id.abstractId;

    const result = await dispatch(
      getRecommendedPapersById(paperId, abstractId)
    );

    setAutherIddetispaper(
      result?.data?.response?.researchPapersWithSummary[0]?.authors[0]?.authorId
    );
    setPaperDetails(result?.data?.response?.researchPapersWithSummary[0]);

    if (result?.state === 200) {
      setsummaryloadder(false);
    }
    setsummaryloadder(false);

    // setPaperDetails({
    //   paperId: "a815c07c04c3f4448b61a3de3bbc31e182416f6a",
    //   externalIds: {
    //     MAG: "2972769513",
    //     DOI: "10.1073/pnas.1818855116",
    //     CorpusId: 202406272,
    //     PubMed: "31501342",
    //   },
    //   corpusId: 202406272,
    //   publicationVenue: {
    //     id: "bb95bf2e-8383-4748-bf9d-d6906d091085",
    //     name: "Proceedings of the National Academy of Sciences of the United States of America",
    //     type: "journal",
    //     alternate_names: [
    //       "PNAS",
    //       "PNAS online",
    //       "Proceedings of the National Academy of Sciences of the United States of America.",
    //       "Proc National Acad Sci",
    //       "Proceedings of the National Academy of Sciences",
    //       "Proc National Acad Sci u s Am",
    //     ],
    //     issn: "0027-8424",
    //     alternate_issns: ["1091-6490"],
    //     url: "https://www.jstor.org/journal/procnatiacadscie",
    //     alternate_urls: [
    //       "http://www.pnas.org/",
    //       "https://www.pnas.org/",
    //       "http://www.jstor.org/journals/00278424.html",
    //       "www.pnas.org/",
    //     ],
    //   },
    //   url: "https://www.semanticscholar.org/paper/a815c07c04c3f4448b61a3de3bbc31e182416f6a",
    //   title:
    //     "Interfaces and mixing: Nonequilibrium transport across the scales",
    //   abstract:
    //     "Interfacial transport and mixing are nonequilibrium processes coupling kinetic to meso- and macroscopic dynamics. These processes play an essential role in fluids, plasmas, and materials, from celestial to atomic events. Addressing the societal challenges posed by alternative energy sources, efficient use of nonrenewable resources, and purification of water requires an improved understanding of the nonequilibrium dynamics, interfacial transport, and mixing. This special feature issue builds upon recent achievements in understanding interfacial transport and mixing using theoretical analysis, large-scale numerical simulations, laboratory experiments, and technology developments. It brings together works in fluid dynamics, plasmas, applied mathematics, chemistry, material science, geophysics, and astrophysics. This collection of papers explores the state of the art in areas of interfaces and nonequilibrium transport and suggests future research directions in the field.\n\nThis special feature issue of PNAS presents a number of outstanding contributions in “Interfaces and mixing: Nonequilibrium transport across the scales.” This issue is associated with the symposium on “Interfaces and Mixing” invited by the US National Academy of Sciences in 2017 and is a part of the program “Turbulent Mixing and Beyond” founded in 2007 with the support of the international scientific community and national and international funding agencies and institutions (1⇓⇓⇓⇓–6). This issue, the symposium, and the program bring together researchers from many areas of science, mathematics, and engineering and focus their attention on fundamental problems of interfaces, mixing, and nonequilibrium dynamics (1⇓⇓⇓⇓–6).\n\nInterfaces, mixing, and nonequilibrium dynamics govern a broad range of phenomena in nature and technology, in high- and low-energy density regimes, at astrophysical and at atomic scales (1⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓–19).\n\nExamples include supernovas, molecular hydrogen clouds, and accretion … \n\n[↵][1]1To whom correspondence may be addressed. Email: snezhana.abarzhi{at}gmail.com.\n\n [1]: #xref-corresp-1-1",
    //   venue:
    //     "Proceedings of the National Academy of Sciences of the United States of America",
    //   year: 2019,
    //   referenceCount: 31,
    //   citationCount: 25,
    //   influentialCitationCount: 0,
    //   isOpenAccess: true,
    //   openAccessPdf: {
    //     url: "https://www.pnas.org/content/pnas/116/37/18171.full.pdf",
    //     status: "BRONZE",
    //   },
    //   fieldsOfStudy: ["Medicine", "Mathematics"],
    //   s2FieldsOfStudy: [
    //     {
    //       category: "Medicine",
    //       source: "external",
    //     },
    //     {
    //       category: "Mathematics",
    //       source: "external",
    //     },
    //     {
    //       category: "Environmental Science",
    //       source: "s2-fos-model",
    //     },
    //     {
    //       category: "Physics",
    //       source: "s2-fos-model",
    //     },
    //     {
    //       category: "Engineering",
    //       source: "s2-fos-model",
    //     },
    //   ],
    //   publicationTypes: ["JournalArticle"],
    //   publicationDate: "2019-09-09",
    //   journal: {
    //     name: "Proceedings of the National Academy of Sciences",
    //     pages: "18171 - 18174",
    //     volume: "116",
    //   },
    //   citationStyles: {
    //     bibtex:
    //       "@Article{Abarzhi2019InterfacesAM,\n author = {S. Abarzhi and W. Goddard},\n booktitle = {Proceedings of the National Academy of Sciences of the United States of America},\n journal = {Proceedings of the National Academy of Sciences},\n pages = {18171 - 18174},\n title = {Interfaces and mixing: Nonequilibrium transport across the scales},\n volume = {116},\n year = {2019}\n}\n",
    //   },
    //   authors: [
    //     {
    //       authorId: "3023453",
    //       name: "S. Abarzhi",
    //     },
    //     {
    //       authorId: "145066604",
    //       name: "W. Goddard",
    //     },
    //   ],
    //   citations: [
    //     {
    //       paperId: "e47eee7bd5d932ba999ffa0cd6632bfa5d4dfbab",
    //       title:
    //         "Low Mach dynamics of interface and flow fields in thermally conducting fluids",
    //     },
    //     {
    //       paperId: "16aba9e28e9fb41c7203fcbaf6ea9da926d197de",
    //       title:
    //         "Rayleigh–Taylor mixing in porous media at an extreme viscosity contrast",
    //     },
    //     {
    //       paperId: "12fcb4ab585dd103c6aaf974ce14b638a7551f90",
    //       title:
    //         "Interlinking Rayleigh–Taylor/Richtmyer–Meshkov interfacial mixing with variable acceleration and canonical Kolmogorov turbulence",
    //     },
    //     {
    //       paperId: "e56f1f1b6ec7b4ea7995b931805fcff3ba60a2f2",
    //       title: "Occurrence of giant plasma bubble in liquid",
    //     },
    //     {
    //       paperId: "1fa6797f3a8c4a5e378417028db16b7f7718e318",
    //       title:
    //         "Laser and Astrophysical Plasmas and Analogy between Similar Instabilities",
    //     },
    //     {
    //       paperId: "69c33fa0f3a434cd92f2e9072ea1763720402e12",
    //       title:
    //         "Experiments and reduced order modeling of symmetry breaking in Rayleigh-Taylor mixing",
    //     },
    //     {
    //       paperId: "2d7bf3848f8ee8a935a323970a1cd55dffaacb40",
    //       title:
    //         "Velocity Fluctuations Spectra in Experimental Data on Rayleigh–Taylor Mixing",
    //     },
    //     {
    //       paperId: "79f6c3e658d192a002a7c67691ef895761b4580c",
    //       title:
    //         "Invariant forms and control dimensional parameters in complexity quantification",
    //     },
    //     {
    //       paperId: "9055eabc61c717cec2e8f8bd6abf3e510b3cfd23",
    //       title:
    //         "Fluctuations spectra of specific kinetic energy, density, and mass flux in Rayleigh–Taylor mixing",
    //     },
    //     {
    //       paperId: "5c69acd30ab5bbbee05a3e0ba2321728454fdc99",
    //       title:
    //         "Self-similar Rayleigh–Taylor mixing with accelerations varying in time and space",
    //     },
    //     {
    //       paperId: "3dbc82b05b72c01c02108d218ef064a4c3113646",
    //       title:
    //         "Editorial: Interfaces and mixing – non-equilibrium dynamics and conservation laws at continuous and kinetic scales",
    //     },
    //     {
    //       paperId: "48b79cbfef140782d9bae4ba5763cda4880fe722",
    //       title:
    //         "Interface dynamics and flow fields’ structure under thermal heat flux, thermal conductivity, destabilizing acceleration and inertial stabilization",
    //     },
    //     {
    //       paperId: "e79f7007fbd7ce358d2ead2c01657a4151699520",
    //       title: "Supernovae and the Arrow of Time",
    //     },
    //     {
    //       paperId: "0669970067edcba22365e2b976b70ea39c4f8449",
    //       title:
    //         "Buoyancy and drag in Rayleigh-Taylor and Richtmyer-Meshkov linear, nonlinear and mixing dynamics",
    //     },
    //     {
    //       paperId: "b8b52d135ea3890b6a5370cdba7577d2ddae1fac",
    //       title:
    //         "Preface: Non-equilibrium transport, interfaces, and mixing in plasmas",
    //     },
    //     {
    //       paperId: "0c7fe20a6f30129cc414527d879edcc775d3731a",
    //       title:
    //         "Scale-dependent Rayleigh–Taylor dynamics with variable acceleration in a\n finite-sized domain for three-dimensional flows",
    //     },
    //     {
    //       paperId: "2c7258300dd35003da92f8d92e85628135adf3a2",
    //       title:
    //         "Macroscopic and microscopic stabilization mechanisms of unstable interface with interfacial mass flux",
    //     },
    //     {
    //       paperId: "04206be03239e02d1f8174c65cafedea8ca38fb8",
    //       title: "Specific heat effects in two-dimensional shock refractions",
    //     },
    //     {
    //       paperId: "23c89b3469bb42d6b68bc0d16267aa575406a603",
    //       title: "Specific heat effects in two-dimensional shock refractions",
    //     },
    //     {
    //       paperId: "1e579de17dc41318e8348e3380f4ee00bff020ef",
    //       title:
    //         "Inertial dynamics of an interface with interfacial mass flux: Stability and flow fields’ structure, inertial stabilization mechanism, degeneracy of Landau’s solution, effect of energy fluctuations, and chemistry-induced instabilities",
    //     },
    //     {
    //       paperId: "71563be9ce93d92d972da7be85c8f66eeb2a40ae",
    //       title:
    //         "Scale-dependent Rayleigh–Taylor dynamics with variable acceleration by group theory approach",
    //     },
    //     {
    //       paperId: "0ec7bc6a61d77254f41e8060eec68643c02b9622",
    //       title:
    //         "On interplay of surface tension and inertial stabilization mechanisms in the stable and unstable interface dynamics with the interfacial mass flux",
    //     },
    //     {
    //       paperId: "f14b9da5775f4eac57643c18a1356061c34e745b",
    //       title:
    //         "The quantum mechanics-based polarizable force field for water simulations.",
    //     },
    //     {
    //       paperId: "10365b4c24d1be6708aa7e20c7a6ad96ac6d4aa1",
    //       title:
    //         "Two-dimensional scale-dependent Rayleigh-Taylor dynamics with variable acceleration in a finite-size domain",
    //     },
    //     {
    //       paperId: "9791efc35bd910574218750947f273a05b65b7d5",
    //       title:
    //         "Nanoparticle-assembled interface for tailoring dynamics of chemical reactions",
    //     },
    //   ],
    //   references: [
    //     {
    //       paperId: "a958dffb518674d81a90c1053c6e726a87687560",
    //       title: "Turbulent mixing: A perspective",
    //     },
    //     {
    //       paperId: "8ee70f1584d14ca283b2af45a7e46005076ee754",
    //       title:
    //         "Supernova, nuclear synthesis, fluid instabilities, and interfacial mixing",
    //     },
    //     {
    //       paperId: "f14b9da5775f4eac57643c18a1356061c34e745b",
    //       title:
    //         "The quantum mechanics-based polarizable force field for water simulations.",
    //     },
    //     {
    //       paperId: "72095be3a1f4a11c11947fd6a146d7283f35a99b",
    //       title:
    //         "First-principles–based reaction kinetics from reactive molecular dynamics simulations: Application to hydrogen peroxide decomposition",
    //     },
    //     {
    //       paperId: "10f249e7851cad0e47d853909876a8f769c354ed",
    //       title:
    //         "Elucidation of near-resonance vibronic coherence lifetimes by nonadiabatic electronic-vibrational state character mixing",
    //     },
    //     {
    //       paperId: "d2ccdf6d3ebe37f6891c65bdb7524f6fcd9910a3",
    //       title:
    //         "Interface dynamics: Mechanisms of stabilization and destabilization and structure of flow fields",
    //     },
    //     {
    //       paperId: "cbf7cc1af72ab205af7f3561bb281a0cd16e1f55",
    //       title:
    //         "First principles-based multiscale atomistic methods for input into first principles nonequilibrium transport across interfaces",
    //     },
    //     {
    //       paperId: "68b11ff52f1c9b2fd39f79bf1572b16969c372c4",
    //       title:
    //         "Rayleigh–Taylor instabilities in high-energy density settings on the National Ignition Facility",
    //     },
    //     {
    //       paperId: "81cdf228c8dc81a1fb4e506dc8b402956af57d23",
    //       title:
    //         "Spiky electric and magnetic field structures in flux rope experiments",
    //     },
    //     {
    //       paperId: "09540c20bc2bcc1c39c7e39bf2021d979c56fb7c",
    //       title:
    //         "Diffusiophoresis of charged colloidal particles in the limit of very high salinity",
    //     },
    //     {
    //       paperId: "ca7e112e5c2c18400039b1a23b193b92abeaba31",
    //       title:
    //         "Mass and heat transfer between evaporation and condensation surfaces: Atomistic simulation and solution of Boltzmann kinetic equation",
    //     },
    //     {
    //       paperId: "1ccb40d6ba2129164ed41aa023139ad29784faaf",
    //       title:
    //         "Subdiffusive and superdiffusive transport in plane steady viscous flows",
    //     },
    //     {
    //       paperId: "b6ef165bd021996fd544bce47277711bdf4fb52f",
    //       title:
    //         "Nanoscale view of assisted ion transport across the liquid–liquid interface",
    //     },
    //     {
    //       paperId: "b6cdbdf516eebcbffd44e64f5afe904736a032f1",
    //       title: "Coherent Lagrangian swirls among submesoscale motions",
    //     },
    //     {
    //       paperId: "241ae87e32595406aefa859c03e037d2006c4b5e",
    //       title:
    //         "Turbulent mixing and beyond: non-equilibrium processes from atomistic to astrophysical scales",
    //     },
    //     {
    //       paperId: "5ad534934e8e3a1b0331c6a669f631816b45c000",
    //       title:
    //         "Review of theoretical modelling approaches of Rayleigh–Taylor instabilities and turbulent mixing",
    //     },
    //     {
    //       paperId: "da700896667edfc81431c3dc0a08e7037058939f",
    //       title: "Turbulent Mixing and Beyond",
    //     },
    //     {
    //       paperId: "78c97ba61bc2c38830256e33a1c2de10f04eb768",
    //       title:
    //         "Scientific Papers: Investigation of the Character of the Equilibrium of an Incompressible Heavy Fluid of Variable Density",
    //     },
    //     {
    //       paperId: "ce013729b243a8c5df5a8e3733a06bbd83c702dc",
    //       title:
    //         "Physics of Shock Waves and High-Temperature Hydrodynamic Phenomena",
    //     },
    //     {
    //       paperId: "02d5237bc7a27b434243cc730a378d4d4180d734",
    //       title: "Statistical Physics: Statics, Dynamics and Renormalization",
    //     },
    //     {
    //       paperId: "021cad6efb51a7ff8da1070447b955d5b94fe642",
    //       title: "Similarity and Dimensional Methods in Mechanics",
    //     },
    //     {
    //       paperId: "5bba544f765f3fb63d85256c57a9e57eb1d7bbdd",
    //       title:
    //         "Taylor instability in shock acceleration of compressible fluids",
    //     },
    //     {
    //       paperId: "7e109580ef6cf3e1e56580a9d51ae8f727932e1e",
    //       title:
    //         "The mechanics of large bubbles rising through extended liquids and through liquids in tubes",
    //     },
    //     {
    //       paperId: "fd12dcc5fccf85d5b66944db445814026bfe800d",
    //       title: "Waves In Fluids",
    //     },
    //     {
    //       paperId: "98589ba8c89ead0a60a5d6bab876c42459db3126",
    //       title:
    //         "Turbulent mixing and beyond: non-equilibrium processes from atomistic to astrophysical scales II",
    //     },
    //     {
    //       paperId: "dc638f8d4d17a7fffeaa78399d886d2b0b66714a",
    //       title:
    //         "Turbulent mixing and beyond: non-equilibrium processes from atomistic to astrophysical scales I",
    //     },
    //     {
    //       paperId: "f9fdd4005b6c8cfa6426fd5321fb0952cc711b70",
    //       title: "Statistical Physics",
    //     },
    //     {
    //       paperId: "2b1ca9a00e46cdf5dd87428cf21939ddc1393f83",
    //       title: "Fluid turbulence",
    //     },
    //     {
    //       paperId: "e13ac5c4d2f82145c0f415b4ed2ea1f7b01c5fd7",
    //       title:
    //         "Supernovae and Nucleosynthesis: An Investigation of the History of Matter, from the Big Bang to the Present",
    //     },
    //     {
    //       paperId: "0902e9e2926fc4dca046d35c25b8032fe2094bc3",
    //       title:
    //         "Instability of the interface of two gases accelerated by a shock wave",
    //     },
    //     {
    //       paperId: null,
    //       title:
    //         'Interfaces and Mixing: Non-equilibrium transport across the scales" (video recording',
    //     },
    //   ],
    //   summary:
    //     "Interfacial transport and mixing are important processes in fluids, plasmas, and materials, impacting societal challenges like alternative energy sources and water purification. This special feature issue in PNAS explores recent advancements in understanding these dynamics through theoretical analysis, simulations, experiments, and technology developments across various scientific disciplines. The collection of papers highlights the state of the art in interfaces and nonequilibrium transport, suggesting future research directions in the field.",
    // });
  };

  const [authdatadetails, setauthdata] = useState({
    status: 200,
    data: "PjEWfh2LHaz/8dE0NOFFn4uJ2nX2bOy6u+TT8c7FrT7gJZjhI6RHB7aXaptLm8cDGaM1tTK/lp1LnBaUli6dVnmgURbsGXXaUzhsbRQ5p+vV4+wqUeY3bDmeAAijXNZNFAhyVMixLW4UaBIVsKXgTnAIaUnvhFeCtfbn98eL9bKCMy4XS+1X/wmXvLI8pp7kU31pvzhM/omO9eXN14/GF1fFf+bEm0I7YHsZHq3VtCm0ThQ6kIGhXdof1xZgAMk0hmELBg2OXZbLxY7m2Sdu7FO+XkwWa96zv9zNEYcGhJFwNWaUFB0M6+17FoI6qCCBDvPosid3UDpNhferVbLZwatNjPd4oT8MBKoY+0Lz7ejrpBREihlRA8vesJn8jGOtfrUJ/BzTxvMR9YYf+QxJUAn9HMKEYGlqkS6XAKJjHmBm3zlXDdwf5EYoK0BY+8egdrXUiVqUn3qCd8DGwQsNagu2gl4rzTLFRN5I+DVwf9q1LyssiEPCJ8Rmorjm6TWB0TEzgJ2+7N6nwnChRxFHA04w4CD2lB7JQuT6RMVdKDjLJcdKFzW9X10rDrFj8VvHZuJSLkiStI795Wr4GnMtNuBi9WxSxdnlQCnRxYTygshoklCuZtdlwJ2k5Etnp6vCscP7P3iW/EFGJadthcn0gpWF73ilAlRSi8arFApZg7sprxXlCu2L+q/9XyOZJT7WRDJx/eJ6NpuHtXSS5uT1U+6HmgdJ0SlXiQ0ANO0xl+cpDJ3KEvg8GSQvoQWqocxLm1E9bsS62pvsLbYdJ/V3m+aVp8gWUhCDjFHb40PQh8RfNCKre7UxhEA3yecD3YEqp/DUP5/Cz2lAiOc0XKiOD4Zl1lw0s7hU94v1vUUlkpRQKje03unaIlCjaZokDplIhshvnwH1rRB8ABBFvZRrDLAOl2d83ptmA6Gm+ou2/yoGnJK4xXDYAcIrMm5NxrqjqH7ukFxszF9JlvEFAFA15NeEoxNGlkBIxbMa5X67WeDn+Ouw/l3HqvyTFXkCPDhDxOayQ5l9h4rWbRf0Hdhe634QgODWX5wcVp3z9BbXhp+1flL0/iF7S0J4dfQ0rVV00FcWj7GHFA058Q/Tuuz03sz9CPMj6oLHRO2pd1BVrL3YW/91YUp5OX6zT8cM9zUeWhXS2xLA786xQi+IxEKvyArK+3dDoFRvwDEWjPgQorcKZKzgPQIOlKgdnaaT2YVGn8Z+pWJrZNPRrEgk29cXadt5bvpdcVpuKd3ucXXH0T8HtTR2cqiTX/Z12hTjZ4oOMNwwqVPGASla5Ys4g+Dm8OgXjCh6qOMoiu+oLMw71sKcGjcDLBZumY7ZCTrbRD1pOENugEc6d66gaI4TaAjglkvog51ShzzAzhu0EVyO86xfqFys4p7bD/AuvHVxWokEdVeOVJp0FLYu3rc8SplRwJtLysTjZHV1Fnp2wpZrP6MIQEVR6uQZJuCF4AtZPMaNub0lA7tYOT/6zbDGg2Y/njqn89gxqHPUPUy0ZIhoHTuPMXkizYwvO+7+HXmxY591j8V2guz1YwlR92WE30up+U/0r7eWMZi5AgRqW3TaGL+4jBS+cYirJwmB3HVPopW0KcydM0lM7kzxmb2uBKxMo6PA/8zn7JVsxk9/k6l3lf+SLWYVftFpGvwiQcX7Zkkc8kSWPOACYa9y9OUMXZWHKQ==",
    data1: {
      education_details: {
        id: 88596,
        user_id: 89402,
        ug_course: "2",
        ug_course_name: "BA",
        ug_department: "1",
        ug_department_name: "Digital Filmmaking",
        ug_university: "581",
        ug_university_name: "Other",
        ug_institution: "1",
        ug_institution_name:
          "Parvathaneni Brahmayya Siddhartha college of Arts & Science",
        ug_year_of_completion: "2024-01-31",
        pg_course: "9",
        pg_course_name: "MSc",
        pg_department: "2",
        pg_department_name: "Accountancy",
        pg_university: "1",
        pg_university_name: "University of Petroleum and Energy Studies",
        pg_institution: "2",
        pg_institution_name:
          "Annamacharya Institute of Technology and Sciences",
        pg_year_of_completion: "2024-12-02",
        phd_course: "18",
        phd_course_name: "Ph.D",
        phd_department: "3",
        phd_department_name: "Actuarial Science",
        phd_university: "2",
        phd_university_name: "DAV Institute of Engineering & Technology",
        phd_institution: "1",
        phd_institution_name:
          "Parvathaneni Brahmayya Siddhartha college of Arts & Science",
      },
      co_authors: 26,
      user_details: [
        {
          id: 5,
          name: "Pritesh Professional",
          country: "India",
          state: "Bihar",
          followers: 6,
          profile_photo_path: "profile-82284-1737716349.png",
          followings: 10,
          user_type: "2",
        },
      ],
      topics: [
        "Conference",
        "Digital Context",
        "University Teaching Role",
        "New Learning Scenarios",
      ],
    },
    message: "User data!",
  });

  const [paperAuthdetails, setpaperAuthdetails] = useState();
  const [Seconddetailsloadder, setSeconddetailsloadder] = useState(false);

  const [showAllAuthors, setShowAllAuthors] = useState(false);

  const fetchauterdetais = async () => {
    setSeconddetailsloadder(true);
    // AutherIddetispaper
    const res = await dispatch(getAuthorsPapers(49184733));
    if (res?.status === 200) {
      setpaperAuthdetails(res?.data?.response?.papers);
      setSeconddetailsloadder(false);
    }
    setSeconddetailsloadder(false);
  };

  useEffect(() => {
    fetchauterdetais();
  }, []);


  const {
    // Sementic Dat
    abstract,
    externalIds,
    authors,
    citations,
    publicationDate,
    journal,
    summary,
    title,
    url,
    year,
    // IFERP DB
    paper_title,
    author_name,
  } = paperDetails || {};


  const handleClickSummary = () => {
    setShowActive("Summary");
    const summaryElement = document.getElementById("summary");
    if (summaryElement) {
      summaryElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClickActive = () => {
    setShowActive("Abstract");
    const abstractElement = document.getElementById("abstract");
    if (abstractElement) {
      abstractElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClickFullText = () => {
    setShowActive("Full-Text");
    const fullTextElement = document.getElementById("full-text");
    if (fullTextElement) {
      fullTextElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClickSimilarPapers = () => {
    setShowActive("Similar Papers");
    const similarPaperElement = document.getElementById("similar-papers");
    if (similarPaperElement) {
      similarPaperElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleClickAboutAuthors = () => {
    setShowActive("About Author");
    const aboutAuthorsElement = document.getElementById("about-authors");
    if (aboutAuthorsElement) {
      aboutAuthorsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    fetchPaper();
  }, []);

  const reduxData = useSelector((state) => state.global);
  const { isUserSide, isRightSide } = reduxData || {};

  const [visibleCount, setVisibleCount] = useState(2);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    if (showMore) {
      setVisibleCount(2);
    } else {
      setVisibleCount(authdatadetails?.data1?.topics?.length);
    }
    setShowMore(!showMore);
  };
  return (
    <div className="feed-details-author-container">
      <div className="row">
        <div
          className={`${isUserSide || isRightSide ? "col-12 " : "col-xl-8 col-lg-7"}`}
        >
          {summaryloadder ? (
            <div
              className="loader-container d-flex justify-content-center align-items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div className="main-div ">
              <div className={`${isSide ? "left-w-o" : "left-w"}`}>
                <Breadcrumb
                  list={[
                    { title: "Home" },
                    { title: "Search" },
                    { title: "Reviewing the effectiveness..." },
                  ]}
                  className="text-16-400"
                  isGreen
                />
                <h1 className="title-text mt-24">
                  {title ? title : paper_title ? paper_title : "-"}
                </h1>
                <div className="mt-26">
                  <div className="row gy-3">
                    <div className="col-12">
                      {/* <p
                      className={`pra-text     ${isSide ? "pra-sm" : "pra-m"}`}
                    >
                      <img
                        src={icons?.avatarTwoIcons}
                        className="h-32 w-32 rounded-circle me-5"
                      />

                      {authors
                        ? showAuthors && authors.length > 0
                          ? authors?.map((item) => (
                              <span key={item.id}>{item.name}</span>
                            ))
                          : authors?.length > 0 && (
                                <>
                                  {authors[0].name}, {authors[1]?.name}
                                </>
                              )
                            ? author_name
                            : author_name
                        : "Null"}

                      <div className="mt-10">
                        {authdatadetails && authdatadetails?.length > 2 && (
                          <span
                            className="span-pra "
                            onClick={() => setShowAuthors(!showAuthors)}
                          >
                            {!showAuthors
                              ? `+ Show ${authdatadetails?.length - 2} more`
                              : "   Show Less"}
                          </span>
                        )}
                      </div>
                    </p> */}
                      {/* <p className={`pra-text ${isSide ? "pra-sm" : "pra-m"}`}>
                        <img
                          src={icons?.avatarTwoIcons}
                          className="h-32 w-32 rounded-circle me-5"
                        />

                        {authors
                          ? showAuthors && authors.length > 0
                            ? authors?.map((item) => (
                                <span key={item.id}>{item.name}</span>
                              ))
                            : authors?.length > 0 && (
                                  <>
                                    {console.log(authors[0].name, "AUTHORS")}
                                    {authors[0]?.name}, {authors[1]?.name}
                                  </>
                                )
                              ? author_name
                              : author_name
                          : "No author found"}

                        <div className="mt-10">
                          {authdatadetails && authdatadetails.length > 2 && (
                            <span
                              className="span-pra "
                              onClick={() => setShowAuthors(!showAuthors)}
                            >
                              {!showAuthors
                                ? `+ Show ${authdatadetails.length - 2} more`
                                : "   Show Less"}
                            </span>
                          )}
                        </div>
                      </p> */}

                      <p className={`pra-text ${isSide ? "pra-sm" : "pra-m"}`}>
                        {authors && authors.length > 0 ? (
                          <>
                            {authors.slice(0, 2).map((item) => (
                              <>
                                <img
                                  src={icons?.avatarTwoIcons}
                                  className="h-32 w-32 rounded-circle me-5"
                                />
                                <span key={item.id}>{item.name} </span>
                              </>
                            ))}

                            {showAllAuthors &&
                              authors.slice(2).map((item) => (
                                <>
                                  <img
                                    src={icons?.avatarTwoIcons}
                                    className="h-32 w-32 rounded-circle me-5"
                                  />
                                  <span key={item.id}>{item.name} </span>
                                </>
                              ))}

                            <div className="mt-10">
                              {authdatadetails &&
                                authdatadetails?.length > 2 && (
                                  <span
                                    className="span-pra "
                                    onClick={() => setShowAuthors(!showAuthors)}
                                  >
                                    {!showAuthors
                                      ? `+ Show ${authdatadetails?.length - 2} more`
                                      : "   Show Less"}
                                  </span>
                                )}
                            </div>
                          </>
                        ) : (
                          "No author found"
                        )}

                        {/* Show "Show More" or "Show Less" */}
                        <div className="mt-10">
                          {authdatadetails && authdatadetails.length > 2 && (
                            <span
                              className="span-pra"
                              onClick={() => setShowAllAuthors(!showAllAuthors)} // Toggle the visibility of the remaining authors
                            >
                              {!showAllAuthors
                                ? `+ Show ${authors.length - 2} more`
                                : "Show Less"}
                            </span>
                          )}
                        </div>
                      </p>

                      {/* <p className={`pra-text ${isSide ? "pra-sm" : "pra-m"}`}>
                        {authors && authors.length > 0
                          ? authors.map((item) => (
                              <>
                                <img
                                  src={icons?.avatarTwoIcons}
                                  className="h-32 w-32 rounded-circle me-5"
                                />
                                <span key={item.id}>{item.name}</span>
                              </>
                            ))
                          : "No author found"}

                        <div className="mt-10">
                          {authdatadetails && authdatadetails.length > 2 && (
                            <span
                              className="span-pra"
                              onClick={() => setShowAuthors(!showAuthors)}
                            >
                              {!showAuthors
                                ? `+ Show ${authdatadetails.length - 2} more`
                                : "Show Less"}
                            </span>
                          )}
                        </div>
                      </p> */}

                      <div
                        className="fa-center gap-2 pointer"
                        onClick={() => {
                          dispatch(handleCopy(externalIds?.DOI));
                        }}
                      >
                        <p className="link-text">
                          {externalIds?.DOI || "Null"}
                        </p>
                        <img src={icons?.copyIcons} alt="copy-icons" />
                        <span className="copy-text">Copy DOI</span>
                      </div>

                      <div className="">
                        <div
                          className="brave-scroll"
                          style={{
                            maxHeight: "300px",
                            overflowY: "auto",
                            marginTop: "10px",
                          }}
                        >
                          <div className="d-flex flex-wrap gap-3">
                            {authdatadetails?.data1?.topics
                              .slice(0, visibleCount)
                              .map((topic, index) => (
                                <div
                                  key={index}
                                  className="p-12"
                                  style={{
                                    border: "1px solid #333333",  
                                    borderRadius: "12px",
                                  }}
                                >
                                  <span>{topic}</span>
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Toggle button for Show More / Show Less */}
                        <span
                          onClick={handleToggle}
                          className="text-14-500 color-113D"
                          style={{ cursor: "pointer" }}
                        >
                          {showMore
                            ? "- Show Less"
                            : `+ Show ${authdatadetails?.data1?.topics?.length - visibleCount} more`}
                        </span>
                      </div>
                    </div>
                    {/* <div className={`${isSide ? "col-12" : "col-lg-5"}`}>
                <div className={`details-box ${isSide ? "b-c-details" : ""}`}>
                  {journal && journal.name && (
                    <div className="fa-center gap-2">
                      <img
                        src={icons?.docsAIcons}
                        alt="calender-icons"
                        loading="lazy"
                        className="h-22 w-22 object-fit-contain"
                      />
                      <p className="calender-text">Journal:{journal.name}</p>
                    </div>
                  )}

                  <div className={`${isSide ? "d-flex gap-2" : ""}`}>
                    {publicationDate && (
                      <div className="fa-center gap-2  mt-16">
                        <img
                          src={icons?.calenderAIcons}
                          alt="calender-icons"
                          loading="lazy"
                          className="h-22 w-22 object-fit-contain"
                        />
                        <p className="calender-text">
                          Publication Date:
                          {moment(publicationDate).format(" MMM DD, YYYY")}
                        </p>
                      </div>
                    )}

                    <div className="fa-center gap-2 mt-16">
                      <img
                        src={icons?.eyesBIcons}
                        alt="calender-icons"
                        loading="lazy"
                        className="h-22 w-22 object-fit-contain"
                      />
                      <p className="calender-text">31 Views</p>
                    </div>
                  </div>
                </div>
                {isSide && (
                  <div
                    className={`fa-center gap-3 ${isSide ? "mt-26" : "mt-16"}`}
                  >
                    <Button
                      btnText="#Islamic Financial Institutions In Malaysia"
                      className="h-41"
                      btnStyle="BBA"
                    />
                    <Button
                      btnText="#Islamic Financial Institutions"
                      btnStyle="BBA"
                      className="h-41"
                    />
                    <p className="show-text">
                      {" "}
                      <img
                        src={icons?.pulseBIcons}
                        className="h-12 w-12"
                      />{" "}
                      Show 8 more
                    </p>
                  </div>
                )}
              </div> */}
                  </div>
                </div>
                {/* review */}
                <div className="review-box">
                  <div className="fa-center gap-1">
                    <Button
                      btnText="New"
                      className="h-29 pt-6 pb-6 br-8 w-51"
                    />
                    <h4 className="review-text">
                      Get your research rolling with a Literature Review
                    </h4>
                  </div>
                  <p className="review-pra">
                    Skip hour sifting through countless paper. Academia can
                    simplify the process with a comprehensive overview of new
                    and popular works for your research topic.
                  </p>
                  <p className="review-pra">
                    Request your preferred subject area for your Literature
                    Review
                  </p>
                  <div className="search-box">
                    <div className="btn-search">
                      <TextInput
                        placeholder="Social Psychology"
                        className="h-51 black-b"
                      />
                    </div>
                    <div className="btn-c">
                      <Button
                        btnText="Get your literature review"
                        rightIcon={icons?.rightLIcons}
                        rightIconClass="h-14 w-14 object-fit-contain"
                        btnStyle="BBA"
                        className="h-51"
                      />
                    </div>
                  </div>
                </div>
                {/* SEARCH  */}
                <div className="search-div-box" style={{
                  position: "sticky",
                  top: "0",
                  zIndex: 10,
                }}>
                  <div className="search-btn-box" >
                    <div
                      className={`${showActive === "Summary" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickSummary}
                    >
                      Summary
                    </div>
                    <div
                      className={`${showActive === "Abstract" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickActive}
                    >
                      Abstract
                    </div>
                    <div
                      className={`${showActive === "Full-Text" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickFullText}
                    >
                      Full-Text
                    </div>
                    <div
                      className={`${showActive === "Similar Papers" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickSimilarPapers}
                    >
                      Similar Papers
                    </div>
                    <div
                      className={`${showActive === "About Author" ? "show-active-b" : "show-text-b"}`}
                      onClick={handleClickAboutAuthors}
                    >
                      About Author
                    </div>
                  </div>
                  {!isSide && (
                    <div className="btn-g">
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.translateIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.playIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.askIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.uploadBIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.activeSaveIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.driveIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.shareIcons}
                      />
                      <Button
                        btnStyle="bg-ffff"
                        className="h-41"
                        leftIcon={icons?.reportIcons}
                      />
                    </div>
                  )}
                </div>
                {/* Summary */}
                <h4 className="sub-title-text" id="summary">
                  Summary
                </h4>
                <div className="d-flex gap-3 justify-content-between mt-28 mb-28">
                  <div className="d-flex gap-2">
                    <img
                      src={icons?.activeStarIcons}
                      alt="active-star"
                      loading="lazy"
                      className="h-24 w-24"
                    />

                    <p className="summer-text ">{summary && summary}</p>
                  </div>
                  <img
                    src={icons?.lightCIcons}
                    alt="copy"
                    className="h-24 w-24 pointer"
                    onClick={() => {
                      dispatch(handleCopy(summary));
                    }}
                  />
                </div>
                <div className="abstract-box">
                  <h4 className="sub-title-text" id="abstract">
                    Abstract
                  </h4>
                  <p className="abstract-text text-justify">
                    {abstract && abstract}
                  </p>
                </div>
                <div className="ask-box">
                  <div className="d-flex align-items-center gap-2">
                    <img src={icons?.docSearchIcons} className="h-48 w-48" />
                    <p className="text-18-500 color-0303"> Ask this paper</p>
                  </div>
                  <div className="fa-center">
                    <img
                      src={icons?.rightSAIcons}
                      className="h-24 w-24 object-fit-contain pointer"
                    />
                  </div>
                </div>
              </div>

              {isSide && (
                <div className="side-bar">
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.translateIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">
                      Translate this paper in your preferred language
                    </p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.playIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">
                      Listen to the abstract of this paper
                    </p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.askIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Ask Paper</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.uploadBIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Export to reference manager</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.activeSaveIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Bookmark</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.driveIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Save to drive</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.shareIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Share</p>
                  </div>
                  <div className="side-t">
                    <Button
                      leftIcon={icons?.reportIcons}
                      btnStyle="Lb"
                      leftIconClass="h-24 w-24"
                      className="h-48 w-48 pb-12 pt-8"
                    />
                    <p className="side-items">Report</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={`${isUserSide || isRightSide ? "col-12" : "col-xl-4 col-lg-5"}`}
        >
          <div
            className="auth-side brave-scroll"
            style={{
              position: "sticky",
              top: "0",
              height: "calc(100vh- 20px)",
              overflowY: "auto",
            }}
          >
            <div className="d-flex align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon1}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">
                  Translate this paper in your preferred language
                </h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon2}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">
                  Listen to the abstract of this paper
                </h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon3}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Ask Paper</h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon4}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">
                  Export to reference manager
                </h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon5}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Bookmark</h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon6}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Save to drive</h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon7}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Share</h1>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2 mt-10">
              <div>
                <img
                  src={icons.authorsideicon8}
                  alt="authorsideicon1"
                  className="img-fluid w-48 h-48"
                />
              </div>
              <div>
                <h1 className="text-16-400 color-3333">Report</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SecondDetails
        isSide={isSide}
        handleClickFullText={handleClickFullText}
        authdata={authdatadetails}
        paperAuthdetails={paperAuthdetails}
        Seconddetailsloadder={Seconddetailsloadder}
      />
      <div className="mt-40">
        <PackageDetails
          isSide={isSide}
          paperAuthdetails={paperAuthdetails}
          Seconddetailsloadder={Seconddetailsloadder}
        />
      </div>
    </div>
  );
};

export default FeedDetailsAuthor;
