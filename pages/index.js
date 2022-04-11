import Image from 'next/image';
import Link from 'next/link';
import whatIsAkacoinData from "../data/home/whatIsAkacoinData.json";
import chooseWalletData from "../data/home/chooseWalletData.json";
import quickGuideCardData from "../data/home/quickGuideCardData.json";
import facilitiesCardData from "../data/home/facilitiesCardData.json";

import { BsArrowRight } from "react-icons/bs"
import WalletSlider from '../components/home/WalletSlider';
import QuickGuideCard from '../components/home/QuickGuideCard';
import FacilitiesCard from '../components/home/FacilitiesCard';

export default function Home() {

  return (
    <main>
      <header>

      </header>

      {/* ---------------------
        Home second section (What is Akacoin?)
      -------------------------- */}
      <section className="home__dual_div_container">
        <h2 className="heading">{whatIsAkacoinData.sectionHeading}</h2>

        <div className="home_dd__content_wrapper">
          <div className="home_dd__subheading_wrapper">
            <h3>{whatIsAkacoinData.subHeading}</h3>
          </div>
          <div className="home_dd__paragraph_wrapper">
            <p>{whatIsAkacoinData.paragraph}</p>
            <Link href={whatIsAkacoinData.link}>
              <a className="home_ddp__link">{whatIsAkacoinData.linkText} <BsArrowRight size="25px" /></a>
            </Link>
          </div>
        </div>
        <div className="home_dd__img_wrapper">
          <div className="home_ddi__img1">
            <Image src={whatIsAkacoinData.img1} layout="responsive" width="100%" height="80" objectFit="content" alt="" />
          </div>
          <div className="home_ddi__img2">
            <Image src={whatIsAkacoinData.img2} layout="responsive" width="100%" height="35" alt="" />
          </div>
        </div>
      </section>

      {/* ---------------------
        Home third section (Choose Your Wallets)
      -------------------------- */}
      <section className="home__wallet_container">

        <h2 className="heading">{chooseWalletData.sectionHeading}</h2>
        <div className="home__wallet_card_wrapper">
          <WalletSlider data={chooseWalletData.walletCards} />
        </div>
      </section>

      {/* ---------------------
        Home Fourth section (Quick Start Guide)
      -------------------------- */}
      <section className="home_quick_guide__container">
        <h2 className="heading">{quickGuideCardData.sectionHeading}</h2>
        <div className="home__guide_card_wrapper">
          <QuickGuideCard data={quickGuideCardData.quicGuideCards} />
        </div>
      </section>

      {/* ---------------------
        Home fifth section (Transactions info)
      -------------------------- */}
      <section className="home_facilities__container">
        <FacilitiesCard data={facilitiesCardData} />
      </section>

      {/* ---------------------
        Home sixth section (Transactions info)
      -------------------------- */}
      <section className="home_transactions_info__container">
        <div className="home_transactions_info__wrapper">
          <div className="transactions_info__card">
            <label>Transactions/Second</label>
            <h3>2,905</h3>
          </div>
          <div className="transactions_info__card">
            <label>Total Transactions</label>
            <h3>$64,540,470,129</h3>
          </div>
          <div className="transactions_info__card">
            <label>Avg. Cost/Transaction</label>
            <h3>$0.00025</h3>
          </div>
          <div className="transactions_info__card">
            <label>Validator Nodes</label>
            <h3>1,645</h3>
          </div>
        </div>
      </section>

    </main>
  )
}
