

const EducationCard = ({ image, alt, school, program, grade, description }) => {
    return(
        <div className="education-card">
            <div>
                <img src={image} alt={alt} />
                <article>
                    <h2>{school}</h2>
                    <p>{program}</p>
                </article>
            </div>
            <p className="grade"><b>Grade</b>: {grade}</p>
            <p>{description}</p>
        </div>
    )
}

export default EducationCard