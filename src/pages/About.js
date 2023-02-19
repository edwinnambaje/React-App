import classes from './About.module.css'
import profile from '../images/profile.jpg'
function About(){
    return <section className={classes.about}>
        <div className={classes.abouts}>
          <div className={classes.col}>
            <div className={classes.img}>
                <img src={profile} alt='edwin' width={270} height={360}/>
            </div>
          </div>
          <div className={classes.cols}>
            <h1 className={classes.title}>About <span>me</span></h1>
            <h2>Software Engineer</h2>
            <p>I'm an experienced software engineer who constantly seeks<br/>
              out innovative solutions to everyday problems. In my five<br/>
              years in this industry, I've honed my analytical thinking and<br/>
              collaboration skills, and I love working with a team.</p>
          </div>
        </div>
      </section>
}
export default About;