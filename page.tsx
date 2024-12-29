"use client";
import { useState } from "react";

import Budget_section from "./budget-section/budget-section";
import Financial_photo_scroll from "./photo-scroll/financial-photo-scroll";
import "./financial-literacy.css";
import Navbar from "@/app/components/Navbar";


const Finance = () => {
    const topic_overview = [
        { src: '/hex-class/00ff00/financial-literacy/pizza_budget.png', title: 'Budgeting',
            description: 'The most basic tool for managing your money. Balance tuition, living expenses, and fun while building smart habits.' },
        { src: '/hex-class/00ff00/financial-literacy/light_bulb.png', title: 'Student loans',
            description: 'College is expensive and student loans can help. Understand the types of loans, interest rates, and repayment options.' },
        { src: '/hex-class/00ff00/financial-literacy/wallet.png', title: 'Banking',
            description: 'Learn how to take advantage of banks to manage your money. Understand credit scores and responsible credit use. '},
        { src: '/hex-class/00ff00/financial-literacy/money_hand.png', title: 'Investing',
            description: 'Start building your financial security early. Learn the basics of how to grow your wealth over time and make informed decisions.'},
    ];

    return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="text-container">
          <li className="nav-item">Home</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Join Us</li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero-section" className="hero-section section">
            <img src="/hex-class/00ff00/financial-literacy/coin_plant.png" alt="Coin Plant" className="image coin-plant"/>
            <div className="hero-title-box">
                <h1 className="hero-title">Gold Thumb</h1>
                <p className="hero-subtitle subtitle">Grow your financial knowledge</p>
            </div>
                    
            <div className="hero-box">
                <p className="hero-description">
                    40 percent of American college students do not have adequate
                    financial literacy knowledge.{" "}
                    <strong>
                    Gold Thumb provides free blogs and guides to support college
                    students on their financial journey.
                    </strong>
                </p>
                <div className="hero-buttons">
                    <button className="btn read-blog">Read our Blog</button>
                    <button className="btn join-community">Join our Community</button>
                </div>
            </div>

            <img src="/hex-class/00ff00/financial-literacy/coin_guy_left.png" alt="Coin Guy Left" className="image coin-guy-left"/>
            <img src="/hex-class/00ff00/financial-literacy/money_bag_guy.png" alt="Money Bag Guy" className="image money-bag-guy"/>

        </section>

        {/* Topic Overview Section */}
        <section id="overview-section" className="overview-section section">
            <div className="overview-title-box">
                <h2 className="overview-title"> What We Cover </h2>
                <p className="subtitle"> The Essentials for College Financial Literacy </p>
            </div>
                <div className="topics-grid">
                    {topic_overview.map((topic, index) => (
                    <div key={index} className="topic-card">
                        <img src={topic.src} alt={topic.title} className="topic-image" />
                        <h4 className="topic-title">{topic.title}</h4>
                        <p className="topic-description">{topic.description}</p>
                    </div>
                    ))}
                </div>
        </section>

        {/* Budgeting Section */}
        <section id="budgeting-section" className="budgeting-section section">
            <div className="budgeting-header-box">
            <div className="budgeting-title-left-box"> </div>
                <div className="budgeting-header-title-box"> 
                    <h2 className = "budgeting-title"> Budgeting, simplified </h2>
                    <h4 className="subtitle budgeting-subtitle"> A simple rule you can live by. </h4>
                </div>
            <div className="budgeting-title-right-box"> </div>
            </div>

            <img src="/hex-class/00ff00/financial-literacy/pizza_budget.png" alt="Pizza Budget" className="image pizza-budget-image"/>
            <div className="budgeting-box">
                <h4> What is budgeting? </h4>
                <p className="budgeting-overview-description"> Budgeting is a money managing strategy that involves dividing your income into different categories. The most common budgeting rule is the 50/30/20 system, which splits your income across these three categories:   </p>
                <div className="budget-buttons">
                    <button className="btn essentials-box">ESSENTIALS (50%)</button>
                    <button className="btn wants-box">WANTS (30%)</button>
                    <button className="btn save-box">SAVE (20%)</button>
                </div>
            </div>
          
            <Budget_section/>

            <button className="btn budget-action-box">
                Want to Learn More?
                <span className="budget-action-box-secondary-text"> Read our budgeting-related blog posts  </span>
            </button>

        </section>

        {/* Loans Section */}
        <section id="loans-section" className="loans-section section">
            <div className="loans-header-box">
                <div className="loans-title-left-box"> </div>
                    <h2 className = "loans-title"> Let&apos;s learn loans </h2>
                <div className="loans-title-right-box"> </div>
            </div>
            <h4 className="subtitle loans-subtitle"> Invest in your education without worry. </h4>
            
            <div className="loans-descriptions-box">
                <img src="/hex-class/00ff00/financial-literacy/light_bulb.png" alt="Light Bulb" className="image loans-bulb-image"/>
                <h4 className="subtitle loans-descriptions"> College is expensive. Take advantage of student loans to fund your education responsibly.  </h4>
            </div>

            <h2> Types of Loans </h2>
            <div className="loans-box-container">
                <div className="loans-boxes">
                    <h4 className="loans-box-title"> Federal Loans </h4>
                    <p> are loans provided by the federal government. </p>
                        <br></br>
                        <ul> 
                            <li> <strong> Subsidized Loans: </strong> Interest is covered by the government while you&apos;re in school, during the grace period, and deferment. </li>
                            <li> <strong> Unsubsidized Loans: </strong> Interest accrues from the time the loan is disbursed, even while you&apos;re in school. </li>
                        </ul>
                </div>
                <div className="loans-boxes">
                    <h4 className="loans-box-title"> Private Loans </h4>
                    <p> are loans provided by the federal government. </p>

                    <br></br>
                        <ul> 
                            <li> They typically have higher interest rates and fewer borrower protections. </li>
                            <li> Your credit history may affect eligibility and rates. </li>
                        </ul>
                </div>
            </div>

            <h4 className = "loans-recommend"> It is always recommended to take out federal loans as they offer better protection, flexible repayment methods, and lower interest rates.  </h4>
            
            <button className="btn loans-action-box">
                Want to Learn More?
                <span className="loans-action-box-secondary-text"> Read our student loan-related blog posts  </span>
            </button>
            
            <img src="/hex-class/00ff00/financial-literacy/coin_guy_right.png" alt="Coin Guy Right" className="image loans-coin-image"/>

        </section>

        {/* Banking Section */}
        <section id="banking-section" className="banking-section section">
            <div className="banking-header-box">
                <div className="banking-title-left-box"> </div>
                    <h2 className = "banking-title"> How to (make) bank </h2>
                <div className="banking-title-right-box"> </div>
            </div>
            <h4 className="subtitle banking-subtitle"> Set yourself up for responsible spending and saving. </h4>

            <img src="/hex-class/00ff00/financial-literacy/wallet.png" alt="Wallet" className="image wallet"/>
            {/* The Importance of banking and credit */}
            <div className="bank-item"> 
                <h4 className = "bank-overview-title"> The Importance of banking and credit </h4>
                <p className = "banking-introduction"> Banks allow you to easily access your funds, keep your money safe, and provide an easy way to save money. Additionally, growing your credit score with a credit card is essential to accessing better loans, housing options, and even job opportunities. </p>
            </div>

            {/* Savings vs. Checking */}
            <div className = "bank-item"> 
                <h2 className = "bank-savings-checking-credit"> Savings vs. Checking </h2>
                <p className = "bank-save-check-desc"> <strong> A savings account </strong> is designed to help you save money and often earns interest, making it ideal for building an emergency fund or reaching financial goals. However, it usually has limits on how often you can withdraw money. There are also high-yield savings accounts that pay you a much higher interest rate than a standard savings account.  </p>
                <br></br>
                <p className = "bank-save-check-desc"> <strong> A checking account </strong> is used for everyday spending, such as paying bills, shopping, and withdrawing cash, offering unlimited transactions but rarely earning interest. </p>
            </div>

            {/* Growing Your Credit */}
            <div className = "bank-item align-right"> 
                <h2 className = "bank-savings-checking-credit align-right-title"> Growing Your Credit </h2>
                <p className = "banking-introduction"> <strong> Credit cards </strong> let you borrow money for purchases and build your credit history when used responsibly. Your credit score reflects your financial trustworthiness, influenced by how you manage credit, including timely payments and keeping balances low. <strong> A good credit score </strong> helps you access better loan terms, lower interest rates, and financial opportunities. </p>
            </div>

            <img src="/hex-class/00ff00/financial-literacy/money_bag_guy_right.png" alt="Money Bag Guy Right" className="image money-bag-guy-right"/>

            <button className="btn bank-action-box">
                Want to Learn More?
                <span className="bank-action-box-secondary-text"> Read our banking and credit-related blog posts  </span>
            </button>

        </section>

        {/* Investment Section */}
        <section id="investment-section" className="investment-section section">
            <div className="investment-header-box">
                <div className="investment-title-left-box"> </div>
                    <h2 className = "investment-title"> Invest in your future </h2>
                <div className="investment-title-right-box"> </div>
            </div>
            <h4 className="subtitle investment-subtitle"> Grow your wealth and understand the risks. </h4>

            <img src="/hex-class/00ff00/financial-literacy/money_hand.png" alt="Money Hand" className="image money-hand"/>
            <div className="investment-box">
                <h4> Reach your financial goals with investments </h4>
                <p className="investment-overview-description"> Investing is the process of putting your money into assets like stocks, bonds, or mutual funds to grow wealth over time. It’s a way to build financial security, achieve long-term goals, and outpace inflation, but it involves risks that vary based on your choices and strategy. </p>
            </div>

            <div className="investment-box-container">
                <div className="investment-boxes">
                    <h4 className="investment-box-title"> Stocks </h4>
                    <p> Shares of a company that may grow in value or pay dividends. </p>
                </div>
                <div className="investment-boxes">
                    <h4 className="investment-box-title"> Bonds </h4>
                    <p> Loans to companies or governments with regular interest payments. </p>
                </div>
                <div className="investment-boxes">
                    <h4 className="investment-box-title"> Mutual Funds </h4>
                    <p> Pooled investments in a variety of assets, offering diversification. </p>
                </div>
            </div>

            <div className = "investment-item">
                <h4> How do I start? </h4>
                <ol>
                    <li> Make sure you have an emergency fund. Only invest what you are willing to lose. </li>
                    <li> Familiarize yourself with investment types and concepts like diversification, risk, and returns. <a> Read our detailed guide here. </a> </li>
                    <li> Choose an investment account. <a> Read about investment accounts here. </a> </li>
                    <li> Start small. Use beginner-friendly platforms and start with investing minimal amounts. </li>
                    <li> Diversify your portfolio. Reduce the risk of losses from a single investment by spreading investments across multiple assets. </li>
                </ol>
            </div>
            
            <button className="btn invest-action-box">
                Want to Learn More?
                <span className="invest-action-box-secondary-text"> Read our investing-related blog posts  </span>
            </button>
            
            <img src="/hex-class/00ff00/financial-literacy/sprout.png" alt="Coin Sprout" className="image sprout"/>


        </section>

        {/* More Section */}
        <section id="more-section" className="more-section section">

            <div className="more-title-box">
                <h2 className="more-title"> Learn from the best </h2>
                <p className="subtitle more-subtitle"> Our community includes students, professionals, and finance experts from around the world, including the world’s largest financial capitals. </p>
            </div>
            <Financial_photo_scroll/>
                    
            <br></br>
            <h4> Join our Community :) </h4>
            <div className="hero-buttons">
                    <button className="more-btn read-blog"> Become a Writer </button>
                    <button className="more-btn join-community"> Other Opportunities </button>
            </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
            <div className="footer-box-row"> 
                <h4 className = "footer-title"> Gold Thumb </h4>
                <p className = "footer-subtitle"> Follow us. </p>

                <div className="footer-box-col footer-links-box"> 
                    <div className="footer-box-row footer-links"> 
                        <h4 className="footer-links-title"> Company </h4>
                        <p> About Us </p>
                        <p> Terms of Service </p>
                        <p> Privacy Policy </p>
                        <p> Cookies </p>
                    </div>

                    <div className="footer-box-row footer-links"> 
                        <h4 className="footer-links-title"> Blog </h4>
                        <p> Posts </p>
                        <p> Our Writers </p>
                        <p> Contribute </p>
                        <p> Support </p>
                    </div>

                    <div className="footer-box-row footer-links"> 
                        <h4 className="footer-links-title"> Connect </h4>
                        <p> goldthumb@gmail.com </p>
                        <p> Instagram </p>
                        <p> Twitter </p>
                        <p> Linkedin </p>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="footer-divider"></div>

            <div className="footer-box-row"> 
                <h4> Join Our Newsletter </h4>
                <p className="footer-newsletter-desc"> Get weekly financial tips, updated resources, and keep up with the latest from Gold Thumb. </p>
                
                <form className="footer-newsletter-form">
                    <input type="email" placeholder="Enter Email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </footer>


      </main>
    </div>
    )
};

export default Finance;
