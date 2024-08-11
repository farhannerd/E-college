import projectImage1 from "./project1.jpeg";
import projectImage2 from "./project2.jpeg";
import projectImage3 from "./project5.jpeg";
import projectImage4 from "./project4.jpeg";
import projectImage5 from "./project5.jpeg";
import projectImage6 from "./project6.jpeg";
import mentorImage1 from "./mentor1.webp";
import mentorImage2 from "./mentor2.jpg";
import mentorImage3 from "./mentor3.jpg";

export const PROJECTS = [
    {
      id: 1,
      name: "BCA",
      name1:"BCA COURSE",
      description:
        " Bachelor of Computer Applications (BCA) is a three-year undergraduate-level program that primarily focuses on computer applications and software development.",
      image: projectImage1,
      Link: "/bca",
      title:"a",
      title1:"abc",
    },
    {
      id: 2,
      name: "MCA",
      name1:"MCA COURSE",
      description:
        "Master of Computer Applications is well-recognized postgraduate degree is ideal for graduates seeking to specialise in the field of computer applications. ",
      image: projectImage2,
      Link: "/mca",
      title:"a",
      title1:"abc",
    },
    {
      id: 3,
      name: "B.Tech",
      name1:"B.Tech COURSE",
      description:
        "Bachelor of Technology is a 4-year undergraduate degree program in engineering or technology ",
      image: projectImage3,
      Link: "/b.tech",
      title:"a",
      title1:"abc",
    },
    {
      id: 4,
      name: "M.Tech",
      name1:"M.Tech COURSE",
      description:
        " Masters of Technology is a course that focuses on the advanced study of science and technology.It is a two-year postgraduate programme with four semesters.",
      image: projectImage4,
      Link: "/m.tech",
      title:"a",
      title1:"abc",
    },
    {
      id: 5,
      name: "BBA",
      name1:"BBA COURSE",
      description:
        "Bachelor of Business Administration is a course that focuses on the advanced study of Business and Administration. It is a three-year graduate programme with six semesters.",
      image: projectImage5,
      Link: "/bba",
      title:"a",
      title1:"abc",
    },
    {
      id: 6,
      name: "MBA",
      name1:"MBA COURSE",
      description:
        "Masters in Business Administration is a very popular and in-demand course nowadays. Not just in India, the course is also internationally valued and is recognized in other countries too.",
      image: projectImage6,
      Link: "/mba",
      title:"a",
      title1:"abc",
    },
    {
        id: 7,
        name: "B.E",
        name1:"B.E COURSE",
        description:
          "BE is Bachelor of Engineering. A four-year undergraduate curriculum is being offered.. This subject is taken by students hoping to become engineers.",
        image: projectImage1,
        Link: "/mba",
        title:"b",
        title1:"abc",
      },

      {
        id: 8,
        name: "JEE Main",
        name1:"JEE Main EXAM",
        description:
          " JEE Main (JEE-Main), is an Indian standardized computer-based test for admission to various technical undergraduate programs in engineering, architecture, and planning across colleges in India..",
        image: projectImage1,
        Link: "/bca",
        title:"i",
        title1:"ijk",
      },
      {
        id: 9,
        name: "WB JECA",
        name1:"WB JECA EXAM",
        description:
          "West Bengal Joint Examination for Masters in Computer Applications. It is a common entrance exam for admission to MCA programs at West Bengal universities. ",
        image: projectImage2,
        Link: "/mca",
        title:"i",
        title1:"ijk",
      },
      {
        id: 10,
        name: "WBJEE",
        name1:"WBJEE EXAM",
        description:"West Bengal Joint Entrance Examination (WBJEE) is a state-government (West Bengal) controlled centralized test  for admission into Undergraduate Courses (like B.E / B. Tech. / B. Pharm).",
        image: projectImage3,
        Link: "/b.tech",
        title:"i",
        title1:"ijk",
      },
      {
        id: 11,
        name: "GATE",
        name1:"GATE EXAM",
        description:
          "  GATE is the Graduate Aptitude Test in Engineering. It is an entrance exam held annually in India for admission to postgraduate programmes in the science and technology sector..",
        image: projectImage4,
        Link: "/m.tech",
        title:"i",
        title1:"ijk",
      },
      {
        id: 12,
        name: "IPMAT",
        name1:"IPMAT EXAM",
        description:
          "IPMAT (Integrated Programme in Management Aptitude Test) is an aptitude test (currently) offered by 5 IIMs as of now for admission into their 5-year Integrated Programme in Management (IPM)..",
        image: projectImage5,
        Link: "/bba",
        title:"i",
        title1:"ijk",
      },
      {
        id: 13,
        name: "CAT",
        name1:"CAT EXAM",
        description:
          "CAT is the Common Admission Test. It is a national-level entrance exam conducted by the Indian Institutes of Management (IIMs) for admission to their flagship MBA programs..",
        image: projectImage6,
        Link: "/mba",
        title:"i",
        title1:"ijk",
      },
  ];


  export const mentors=[
    {
        id: 1,
        name: "Rahul Kumar",
        title: "Toper of WBJEE",
        image: mentorImage1,
        description: "Rahul is a highly experienced and skilled mentor with a strong background in Mathematics.",
    },
    {
        id: 2,
        name: "Aanya Dey",
        title: "Toper of Wb.Jeca",
        image: mentorImage2,
        description: "Aanya is a highly experienced and skilled mentor with a strong background in Computer.",
    },
    {
        id: 3,
        name: "Aaradhya Pal",
        title: "Toper of JEE ADVANCE",
        image: mentorImage3,
        description: "Aaradhya is a highly experienced and skilled mentor with a strong background in Mathematics.",
    },
  ]

  export const MCA=[
    {
        name:"sem1",
        papers:[
            {
                name:"Python",
                videos:[
                    {
                        name:"Introduction to Programming & Python",
                        link:"https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
                    },
                    {
                      name:"Some Amazing Python Programs - The Power of Python",
                      link:"https://www.youtube.com/watch?v=CpCN9lTFHc4",
                  },
                ],
            },

            {
                name:"DBMS",
                videos:[
                    {
                        name:"Introduction to DBMS (Database Management System) With Real life examples",
                        link:"https://www.youtube.com/watch?v=_UZLrD_R0T4",
                    },
                    {
                      name:" File System vs DBMS | Disadvantages of File System | DBMS Advantages",
                      link:"https://www.youtube.com/watch?v=ZtVw2iuFI2w&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&index=3",
                  },
                ],
            },

        ],
    },


    {
        name:"sem2",
        papers:[
            {
                name:"Python DSA",
                videos:[
                    {
                        name:"Python DSA Basics",
                        link:"",
                    },
                ],
            },

            {
                name:"JAVA",
                videos:[
                    {
                        name:"JAVA Basics",
                        link:"",
                    },
                ],
            },

        ],
    },

  ]