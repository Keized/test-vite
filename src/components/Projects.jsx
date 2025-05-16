import styled from "styled-components"
import React, { useState, useEffect} from "react";

const SectionWrapper = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: #F6F6F6;
    gap: 20px;
`

const Project = styled.div`
    border-radius: 25px;
    img {
        width: 200px;
        height: 200px;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    }
`

function Projects() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('src/data/portfolio.json',
            {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            })
            .then(response => response.json())
            .then(data => {
                setProperties(data);
            })
            .catch((error) => {
                console.error(error)
            });
    }, []);

    return (
        <SectionWrapper id="projects">
            <h2>Mes projets</h2>
            <ProjectsWrapper>
                {properties.map(item => (
                    <Project key={item.title}>
                        <img src={item.image} alt={item.text}></img>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                        <a href={item.link}>Lien vers le projet</a>
                    </Project>
                ))}
            </ProjectsWrapper>
        </SectionWrapper>
    )
}

export default Projects