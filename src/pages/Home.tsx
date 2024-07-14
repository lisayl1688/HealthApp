import { useState } from "react";
import "../App.css"
const Home = () => {

    const[ergbenis,setErgebnis] = useState<number>(0);
    const[ergbenisPAL,setErgebnisPAl] = useState<number>(0);
    let roundedErgebnis = ergbenis.toFixed(2);
    let roundedErgebnisPAL = ergbenisPAL.toFixed(2);


    const[body,setBody] = useState<number | null>(null);
    const[age,setAge] = useState<number | null>(null);
    const[weight,setWeight] = useState<number | null>(null);
    const[activity,setActivity] = useState<number>(0.95);
    const [gender, setGender] = useState<string>("");




    //body auslesen
    const getBody = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBody(Number(event.target.value));
    };

    //age auslesen
    const getAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(event.target.value));
    };

    //weight auslesen
    const getWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(Number(event.target.value));
    };

     //activity auslesen
     const getActivity = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActivity(Number(event.target.value));
    };

    //gender auslesen
    const getGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };

    //funktion für berechnugn 
    function Berechnung (){
        if (body !== null && age !== null && weight !== null) {

            let result :number = 0;
            
            if (gender==="male") {
                result = 66.47+ (13.7* weight) +(5 * body) - (6.8 * age) 
            }else{
                result = 655.1 + (9.6 * weight) + (1.8 * body) - (4.7 * age)
            }
            setErgebnis(result)
            let resultPAL : number = result * activity;
            setErgebnisPAl(resultPAL);

        }else {
            window.alert("Fülle alle Felder aus");
        }
    }
    let ergebnisKJ = ergbenis * 4.184;
    let ergebnisKJPAl = ergebnisKJ * 4.184;
    let roundedResult = ergebnisKJ.toFixed(2)
    let roundedResultPAL = ergebnisKJPAl.toFixed(2)


    return ( 
        <>
        <header id="BackToTop">
            <nav>
                <div className="Logo">
                    <img src="./public/flower2.svg" alt="flowerSVG" />
                    <p>Nutritionist</p>
                </div>
                <div className="MenuOptions">
                    <div className="menuPages">
                        <p>Home</p>
                        <p>About</p>
                        <p>Team</p>
                        <p>Process</p>
                        <p>Pricing</p>
                        <p>Blog</p>
                    </div>
                    <button>Contact Us</button>
                </div>
            </nav>
            <section className="Herosection">
                <div className="top">
                    <img src="./img/Hero.png" alt="hero" />
                    <div className="topRight">
                        <h3>Transform Your ❤️ Health with</h3>
                        <h1>Personalized Nutrition Coaching</h1>
                        <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
                        <div className="heroWrappersRound">
                            <span className="HeroButtons">
                                <button>Get Starter Today</button>
                                <button>Book a Demo</button>
                            </span>
                            <span className="roundPictures">
                                <img className="round1" src="./img/round1.png" alt="round1" />
                                <img  className="round2"src="./img/round2.png" alt="round2" />
                                <img  className="round3"src="./img/round3.png" alt="round3" />
                                <p>430+ Happy Customers</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <main>
            <section className="OurBlog">
                <div className="BlogIntro">
                    <h2>Our Blogs</h2>
                    <p>Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.</p>
                </div>
                <div className="twoCards">
                    <div className="card1">
                        <img className="drink" src="./img/drink.png" alt="drink" />
                        <div className="description">
                            <p>Weight Loss</p>
                            <h4>The Benefits of Hydration for Weight Loss</h4>
                            <p>Discover how staying hydrated can support your weight loss goals and improve overall health.</p>
                        </div>
                        <span>
                            <img className="pinck" src="./img/pink.png" alt="pink" />
                            <div>
                                <p>Emily Johnson</p>
                                <p>23 May 2023 - 5 min read</p>
                            </div>
                            <div className="favorite">
                                <p>♡</p>
                                <p>⚐</p>
                            </div>
                        </span>
                    </div>
                    <div className="card2">
                        <img className="strong" src="./img/strong.png" alt="strong" />
                        <div className="description">
                            <p>Mindful Eating</p>
                            <h4>Cultivating a Healthy Relationship with Food</h4>
                            <p>Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.</p>
                        </div>
                        <span>
                            <img className="grau" src="./img/grau.png" alt="grau" />
                            <div>
                                <p>Sarah Thompson</p>
                                <p>23 May 2023 - 5 min read</p>
                            </div>
                            <div className="favorite">
                                <p>♡</p>
                                <p>⚐</p>
                            </div>
                        </span>
                    </div>
                </div>
            </section>
                <section className="CalorieCalculator">
                    <div>
                        <h2>Test your daily Calorie Requirement</h2>
                        <p>To determine your daily calorie requirement, we need some information about your age, gender, weight, height and activity level. Enter this information to calculate your individual requirements.</p>
                    </div>
                </section>
            <section className="bottomWrapper">
                <div>
                    <div className="bodyAge">
                        <div className="labels">
                            <label htmlFor="Body">Body size (in cm)</label>
                            <input onChange={getBody} type="number" id="Body" value={body ?? ""}/> 
                        </div>
                        <div className="labels">
                            <label htmlFor="Age">Age</label>
                            <input onChange={getAge} type="number" id="Age" value={age ?? ""} /> 
                        </div>
                    </div>
                    <div className="weightActivity">
                        <div className="labels">
                            <label htmlFor="Weight">Weight in Kg</label>
                            <input onChange={getWeight} type="number" id="Weight" value={weight ?? ""}/> 
                        </div>
                        <div className="labels">
                            <label htmlFor="Activity">Activity</label>   
                            <select onChange={getActivity} name="Activity" id="Activity" value={activity ?? ""}>
                                <option value="0.95">Nur Schlafen</option>
                                <option value="1.2">Nur Sitzen oder Liegen</option>
                                <option value="1.5">Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit z.B Büroarbeit</option>
                                <option value="1.7">Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B studierende, Fließband arbeitende Laborkräfte Berufskraftfahrer</option>
                                <option value="1.9">Überwiegend gehende oder stehende Tätigkeit, zum Beispiel Verkäufer:innen, Kellner:innen, Handwerker:innen Mechaniker:innen</option>
                                <option value="2.2">Körperlich anstrengende berufliche Arbeit</option>
                            </select>
                        </div>
                    </div>
                    <h4 className="genderHeadline">Gender</h4>
                    <div className="genderRadio">
                        <label><input onChange={getGender} type="radio" name="gender"  value="female" checked={gender === "female"} />Female</label>
                        <label><input  onChange={getGender} type="radio" name="gender" value="male" checked={gender === "male"} />Male</label>
                    </div>
                    <div className="buttonWrapper">
                        <button className="calculateButton" onClick={Berechnung}>Calculate</button>
                    </div>
                </div>
                <div className="tableWrapper">
                    <table>
                        <tr className="tableHead">
                            <div className="tableHeads">
                                <th></th>
                                <th>Kcal</th>
                                <th>KJ</th>
                            </div>
                        </tr>
                        <tr>
                            <div className="resultText">
                                <td>Basal Metabolic Rate</td>
                            </div>
                            <div className="result">
                                <td>{roundedErgebnis}</td>
                                <td> {roundedResult}</td>
                            </div>
                        </tr>
                        <tr>
                            <div className="resultText">
                                <td>Total Daily Energy Expenditure</td>
                            </div>
                            <div className="result">
                                <td>{roundedErgebnisPAL}</td>
                                <td>{roundedResultPAL}</td>
                            </div>
                        </tr>
                    </table>
                </div>

            </section>
        </main>
        <footer>
            <div className="Logo">
                <img src="./public/flower2.svg" alt="flowerSVG" />
                <p>Nutritionist</p>
            </div>
            <div className="menuPages">
                <p>Home</p>
                <p>About</p>
                <p>Team</p>
                <p>Process</p>
                <p>Pricing</p>
                <p>Blog</p>
            </div>
            <div className="goToTopWrapper">
                <p>Go to Top</p>
                <a href="#BackToTop">🔝</a>
            </div>
        </footer>



            
        </>
    );
}
 
export default Home;