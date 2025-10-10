import React from 'react';
import NewsArticle from '../components/NewsArticle';

const Article14 = ({ theme }) => {
  const articleData = {
    badge: null,
    title: 'Major education reform announced to boost digital literacy',
    author: 'Sarah Williams',
    date: 'March 8, 2022',
    category: 'EDUCATION',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    imageCaption: 'Students engaging with digital learning technology in modern classroom',
    intro: 'The Department of Education has unveiled a comprehensive $15 billion initiative to transform K-12 education by integrating digital literacy across all subjects and ensuring every student graduates with essential technology skills. The program represents the most significant education reform in over two decades.',
    sections: [
      {
        heading: 'Core Components',
        paragraphs: [
          'The Digital Literacy for All initiative establishes new national standards requiring digital competency instruction from kindergarten through high school graduation. Rather than treating technology as a separate subject, the framework integrates digital skills across all disciplines—from using spreadsheets in math to evaluating online sources in history.',
          'Beginning in fall 2023, schools will implement age-appropriate curricula teaching computational thinking, data analysis, online safety, digital citizenship, and basic programming. High school students will complete a digital literacy capstone project demonstrating practical technology skills applicable to college and careers.'
        ],
        quote: {
          text: 'In the 21st century, digital literacy isn\'t optional—it\'s as fundamental as reading, writing, and mathematics.',
          author: 'Miguel Cardona, U.S. Secretary of Education'
        }
      },
      {
        heading: 'Infrastructure Investment',
        paragraphs: [
          'The program allocates $8 billion for technology infrastructure, ensuring every classroom has high-speed internet and sufficient devices for students. Currently, 14 million students lack adequate home internet access, creating a "homework gap" that disadvantages students from low-income families.',
          'To address this disparity, the initiative includes subsidies for home internet access and device lending programs. Schools in underserved areas will receive priority funding, with the goal of eliminating digital access inequity within three years.'
        ],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
        imageCaption: 'Modern learning environment equipped with digital resources'
      },
      {
        heading: 'Teacher Training and Support',
        paragraphs: [
          'Recognizing that effective implementation requires skilled educators, the program dedicates $4 billion to comprehensive teacher training. Every teacher will receive 60 hours of professional development in digital pedagogy, focusing on integrating technology to enhance rather than replace traditional instruction.',
          'Universities with education programs will receive grants to update curriculum, ensuring future teachers graduate with strong digital teaching skills. The initiative also establishes a national network of Digital Learning Coaches—experienced educators who will support teachers implementing new approaches.'
        ],
        quote: {
          text: 'Technology is only as effective as the teachers using it. This investment in professional development is crucial for success.',
          author: 'Randi Weingarten, President of American Federation of Teachers'
        }
      },
      {
        heading: 'Curriculum Development',
        paragraphs: [
          'New curricula emphasize practical skills over theoretical knowledge. Elementary students will learn to safely navigate online environments, evaluate information credibility, and use basic productivity tools. Middle school programs introduce data analysis, digital media creation, and understanding of algorithms and artificial intelligence.',
          'High school courses expand into specialized areas including cybersecurity fundamentals, data science basics, and ethical implications of technology. Students can pursue advanced pathways in programming, digital design, or information systems, earning industry-recognized certifications alongside their diplomas.'
        ]
      },
      {
        heading: 'Addressing Digital Citizenship',
        paragraphs: [
          'A significant focus is digital citizenship—teaching students to engage online responsibly and critically. Curricula address online privacy, recognizing misinformation, understanding social media algorithms, and managing digital reputation.',
          'Mental health aspects receive explicit attention, with lessons on managing screen time, recognizing online manipulation, and building healthy relationships with technology. Schools will adopt evidence-based approaches to helping students navigate social media\'s psychological impacts.'
        ]
      },
      {
        heading: 'Equity and Inclusion',
        paragraphs: [
          'The program specifically targets historic inequities in technology education. Schools serving predominantly minority and low-income students currently offer computer science courses at half the rate of affluent schools. The initiative mandates universal access to advanced technology courses regardless of school location or demographics.',
          'Special emphasis is placed on encouraging girls and underrepresented minorities in technology fields. The program funds partnerships with tech companies providing mentorship, internships, and scholarship opportunities designed to increase diversity in technology careers.'
        ],
        quote: {
          text: 'If we want diversity in tech, we must start by ensuring every child has equal opportunity to develop digital skills.',
          author: 'Melinda Gates, Co-founder of Gates Foundation'
        }
      },
      {
        heading: 'Industry Partnerships',
        paragraphs: [
          'Major technology companies including Google, Microsoft, Apple, and Amazon are contributing $2 billion in additional support through hardware donations, software licenses, and expertise. These partnerships will provide students with access to industry-standard tools and real-world learning opportunities.',
          'Companies are also creating youth apprenticeship programs allowing high school students to gain practical experience through paid internships. These programs provide pathways to technology careers that don\'t require four-year degrees, addressing the skills gap affecting the industry.'
        ]
      },
      {
        heading: 'Assessment and Accountability',
        paragraphs: [
          'To measure success, the Department of Education will conduct annual assessments of digital literacy skills, similar to reading and math testing. Schools will be evaluated on technology integration effectiveness, with struggling districts receiving additional support rather than punishment.',
          'Independent research institutions will study the program\'s long-term impacts on college readiness, career outcomes, and equity metrics. Results will inform ongoing adjustments, ensuring the initiative evolves with technological changes and educational research.'
        ]
      }
    ],
    conclusion: 'The Digital Literacy for All initiative represents recognition that education must evolve to prepare students for rapidly changing technological landscape. By integrating digital skills across curricula, investing in infrastructure and teacher training, and prioritizing equity, the program aims to ensure all students graduate prepared for college and careers in the digital economy. Success would not only enhance individual opportunities but strengthen national competitiveness in an increasingly technology-driven global economy. The initiative\'s true measure won\'t be immediate metrics but whether today\'s students become tomorrow\'s innovators, equipped with skills and knowledge to navigate and shape the digital future.'
  };

  return <NewsArticle theme={theme} article={articleData} />;
};

export default Article14;
