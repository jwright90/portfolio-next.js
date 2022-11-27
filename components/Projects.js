import Thumbnail from './Thumbnaill'

const projects = [
  { 'id': 1, 'row': 2, 'col': 2, 'img': 1, 'title': 'Project 1', 'tags': ['React.js'] },
  { 'id': 2, 'row': 2, 'col': 7, 'img': 2, 'title': 'Project 2', 'tags': ['WordPress'] },
  { 'id': 3, 'row': 2, 'col': 2, 'img': 3, 'title': 'Project 3', 'tags': ['WordPress'] }
]

const Projects = () => {

  return (
    <section className="grid grid-cols-12 grid-rows-7 gap-8 py-16">
      <div className="col-span-12 lg:col-start-2 row-start-1 z-50 self-center relative">
        <h2 className="text-l sm:text-xl ">Projects</h2>
      </div>
      {
        projects.map((p) => (
          <div className={`col-span-12 col-start-1 lg:col-span-5 lg:col-start-${p.col} lg:row-start-${p.row} relative`} key={p.id}>
            <Thumbnail img={p.img} />
            <div className="text-m uppercase mt-8">{p.title}</div>
            <div>{p.tags[0]}</div>
          </div>
        ))
      }
    </section >
  )
}

export default Projects