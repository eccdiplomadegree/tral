import React from 'react';
import Card from './Card';
import './index.css';



import web1 from '../src/img/structure_mechanics_1.jpg';
import web2 from '../src/img/hydraulics.jpg';
import web3 from '../src/img/surveying.jpg';
import web4 from '../src/img/construction_test.jpg';
import web5 from '../src/img/building_materials.jpg';
import web6 from '../src/img/structural_mechanics_2.jpg';
import web7 from '../src/img/soil_mechanics.jpg';
import web8 from '../src/img/advanced_serveying.jpg';
import web9 from '../src/img/basic_transportation.jpg';
import web10 from '../src/img/design_steel.jpg';
import web11 from '../src/img/structure.jpg';
import web12 from '../src/img/estimating_cost_value.jpg';
import web13 from '../src/img/concrete_techonology.jpg';
import web14 from '../src/img/highway.jpg';
import web15 from '../src/img/rainforced_ structure.jpg';
import web16 from '../src/img/construction_management.jpg';


import { NavLink } from 'react-router-dom';


const Cources = (props) => {
    return(
        <>
            <h2 class="form_heading">Cources</h2>
            <div className="maincards">
            <Card cimg={web1} cheading="Structural mechanics 1" ctext="It is the computation of deformations, deflections, and internal forces or stresses within structures, either for evaluation of existing structures." clink=" " btnname=" "/>
            <Card cimg={web2} cheading="Hydraulics" ctext="Hydraulics is a technology and applied science using engineering, chemistry, and other sciences involving the mechanical properties and use of liquids." clink=" " btnname=" "/>
            <Card cimg={web3} cheading="Surveying" ctext="It is the technique, profession, art and science of determining the terrestrial or three-dimensional positions of points and the distances and angles between them." clink=" " btnname=" "/>
            <Card cimg={web4} cheading="Construction test" ctext="Test construction strategies are the various ways that items in a psychological measure are created and decided uponand Also known as itemetric or internal consistency methods." clink=" " btnname=" "/>
            <Card cimg={web5} cheading="Building materials" ctext="Building material is material used for construction. Many naturally occurring substances such as clay, rocks and wood even twigs and leaves, have been used to construction" clink=" " btnname=" "/>
            <Card cimg={web6} cheading="Structural mechanics 2" ctext="It is the computation of deformations, deflections, and internal forces or stresses within structures, either for evaluation of existing structures." clink=" " btnname=" "/>
            <Card cimg={web7} cheading="Soil mechanics" ctext="It is used to analyze the deformations of and flow of fluids within natural and man-made structures that are made of soil, or structures that are buried in soils." clink=" " btnname=" "/>
            <Card cimg={web8} cheading="Advanced Serveying" ctext="Field survey is the basic requirement for preparing any engineering maps or drawings.It can be professionally carried out only when various steps involved in the survey work" clink=" " btnname=" "/>
            <Card cimg={web9} cheading="Basic transportation engineering" ctext="In this we knowledge and understanding of various design, construction and maintanance aspects of roads, railways and bridges are very important for engineers." clink=" " btnname=" "/>
            <Card cimg={web10} cheading="Design of steel" ctext="structural steel design, is an area of structural engineering used to design steel structures.These structures include schools, houses, bridges, aircraft, ships and stadiums." clink=" " btnname=" "/>
            <Card cimg={web11} cheading="Structure" ctext="A structure is an arrangement and organization of interrelated elements in a material object or system, or the object or system so organized.civil engineering structures and mechanical structures." clink=" " btnname=" "/>
            <Card cimg={web12} cheading="Estimating costing & Valuation" ctext="Estimation is the process of finding an estimate, or approximation, which is a value that is usable for some purpose even if input data may be incomplete or unstable." clink=" " btnname=" "/>
            <Card cimg={web13} cheading="Concrete techonology" ctext="Concrete technology deals with study of properties of concrete and its practical applications. ... Various types of cements are used for concrete works which have different properties and applications." clink=" " btnname=" "/>
            <Card cimg={web14} cheading="Highway engineering" ctext="It is an engineering discipline branching from civil engineering that involves the planning, design, construction and maintenance of roads and effective transportation of people and goods." clink=" " btnname=" "/>
            <Card cimg={web15} cheading="Design of rainforced concrete structure" ctext="Rainforced is a composite material in which concrete's relatively low tensile strength and ductility are counteracted by the inclusion of reinforcement having higher tensile strength or ductility." clink=" " btnname=" "/>
            <Card cimg={web16} cheading="construction project management" ctext="Construction management is a professional service that uses project management techniques to oversee the planning, design, and construction of a project, from its beginning to its end." clink=" " btnname=" "/>
            <br/><br/>
                <div className="courcebtn">
                        
                </div>
            </div>
        </>
    );
};
export default Cources;