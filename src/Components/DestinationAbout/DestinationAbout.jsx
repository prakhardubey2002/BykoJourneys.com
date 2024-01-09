import React from 'react'
import styles from "./style.module.css"
const DestinationAbout = ({ name }) => {
    return (
        <div className={styles.accordion}>
            <h1>Frequently <span> Asked Questions</span></h1>
            <div className={styles['accordion-itemzx']}>
                <input type="checkbox" id="accordion12" />
                <label htmlFor="accordion12" className={styles['accordion-item-titlewertx']}>
                    <span className={styles.icon}></span>
                    About {name} Tour Packages
                </label>
                <div className={styles['accordion-item-descwer']}>
                    Byko Journeys stands out as a premier travel provider for several compelling reasons, each rooted in our core values.

                    First and foremost, we take pride in managing all trips end-to-end with our dedicated in-house operations team. This commitment ensures that there are no third-party involvements, guaranteeing transparency and dismissing any uncertainties associated with fishy claims. When we say your travel plan is 100% our responsibility, it's a promise we wholeheartedly mean.
                    Bhutan Tour Packages: Been in the news all over the years for being the first country to measure Happiness Index over their GDP, Bhutan is one of the most unique countries in the world. A country which is landlocked in the eastern Himalayas of South Asia, Bhutan is known for its stunning landscapes, rich culture, and its unique approach of measuring the progress of the country through National Happiness Index, making Bhutan tour packages popular gradually.

                    When you travel to the country with our Bhutan tour packages, you’ll notice that Bhutan is an intriguing and unique place to visit. Bhutan, a mostly Buddhist nation with a population of just over 750,000, is dedicated to sustainable development and has a strong respect for the environment, which travellers notice evidently during their Bhutan trip with our Bhutan tour packages. Bhutan has a wide variety of attractions despite its small size, including historic temples and monasteries, untouched mountains and forests, and lively festivals and celebrations. Bhutan tour packages have something to offer every traveller, whether they are seeking adventure, culture, or relaxation.

                    The cultural heritage and traditions of Bhutan have been passed down through generations. It serves as a destination that offers visitors looking to go deep into a different culture with a unique and authentic experience. Bhutan tour packages allow travellers to discover this fascinating nation and its culture.

                    Another aspect of Bhutanese culture that is interesting is its architecture, which is also one of those interesting things which excite travellers during their Bhutan trip with our Bhutan tour packages. Traditional Bhutanese buildings are made of earth stone, and wood and are decorated with elaborate wood carvings and vibrant paintings. The dzongs which in English are known as fortresses, with their imposing walls and elaborate courtyards, are very impressive, and for sure will leave a lasting impression in your heart when you take a Bhutan trip with our Bhutan tour packages and Bhutan holiday packages. These structures, which function as monasteries and administrative hubs, are an essential component of Bhutan's cultural heritage.

                    We’ve talked so much about the culture and unique traditions of Bhutan along with their architecture which you’ll get to witness with our Bhutan tour packages, we won’t keep you waiting and without a further ado its time to go deeper into the country and know more about the places which you’ll be exploring during a Bhutan trip with our Bhutan tour packages and Bhutan holiday packages. Let’s Go!
                </div>
            </div>
        </div>
    )
}

export default DestinationAbout