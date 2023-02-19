import classes from './Meet.module.css';

function Home(){
    return (
    <section className={classes.hero}>
    <div className={classes.heros}>
       <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>Edwin <span></span></h1>
        {/* //<a href="/html/contact.html" type="button" class="cta">Hire Me</a> */}
      </div>
    </div>
    </section>
    );
}
export default Home;