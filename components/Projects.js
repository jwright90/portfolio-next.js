import Button from './Button';
import Thumbnail from './Thumbnaill'
import { useUrl } from 'nextjs-current-url';



const Projects = () => {
  const {href: currentUrl, pathname } = useUrl() ?? {};

  const projects = [
    { 'id': 1, 'row': 1, 'col': 2, 'img': 2, 'title': 'Tic Tac Toe', 'linkText1': 'Live Site', 'tags': ['React'], 'href1': `${currentUrl}tictactoe` },
    { 'id': 2, 'row': 1, 'col': 7, 'img': 1, 'title': 'Amici Ashford', 'linkText1': 'Live Site', 'tags': ['WordPress'], 'href1': 'https://amiciashford.com' },
    { 'id': 3, 'row': 2, 'col': 2, 'img': 3, 'title': 'DJ Events', 'linkText1': 'Live Site', 'tags': ['Next.js', 'Tutorial'], 'href1': 'https://traversy-nextjs-dj-hz09elk9g-jwright90.vercel.app/', 'href2': 'https://github.com/jwright90/traversy-nextjs-dj' }
  ];

  return (
    <section className="grid grid-cols-12 grid-rows-7 gap-4 md:gap-8 pt-[80px] pb-[80px]" id="projects">
      <div className="col-span-12 lg:col-start-2 row-start-1 z-50 self-center relative">
        <h2 className="text-l sm:text-xl pb-4">Projects</h2>
      </div>
      {
        projects.length != 0 ?
          projects.map((p) => (
            <div className={`col-span-12 col-start-1 lg:col-span-5 lg:col-start-${p.col} lg:row-start-${p.row} relative`} key={p.id}>
              <Thumbnail img={p.img} linkText1={p.linkText1 || "View Project"} href1={p.href1} href2={p.href2} />
              <div className="text-m uppercase mt-8">{p.title}</div>

              <div className="flex gap-4 md:justify-start justify-center">
                {p.tags.map((tag) => (
                  <div className="mt-1" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>


              <div className="flex xl:hidden gap-4 md:justify-start justify-center" >
                <Button text={p.linkText1 || "View Project"} css="xl:hidden mt-0 md:mb-2 mb-4 text-[16px] pb-2" href={p.href1} />
                <Button text={p.linkText2 || "View Code"} css="xl:hidden mt-0 md:mb-2 mb-4 text-[16px] pb-2" href={p.href2} />
              </div>
            </div>
          )) :
          <div className="col-span-12 col-start-1 lg:col-span-5 lg:col-start-2 relative">
            <p>There are no projects to show</p>
          </div>
      }
    </section >
  )
}

export default Projects