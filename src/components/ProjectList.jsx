export default function ProjectList ({projects}) {
        return (
        //отображаем проекты тут.
        <div className="portfolio">
            {projects.map((project, index) => (
                <img key={index} src={project.img} alt="" />
))}
            </div>
    );
}