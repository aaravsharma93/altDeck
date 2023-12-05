import React from 'react';
import style from './footer.module.css';
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className={style.footer}>
      <div className={style['info-span']}>
        <p>
          Larget Digital Marketplace on Solana for crypto collectibles
          and non-fungible tokens(NFTs). Buy and sell these digital assets
          with ease.
        </p>
      </div>

      <ul className={style['footer-nav']}>
        <li className={style['nav-item']}>
        <h2 className={style['nav-title']}>Marketplace</h2>
        <ul className={style['nav-ul']}>
            <li>
              <a href="/" target="blank">All NFTs</a>
            </li>
            <li>
              <a href="/blog" target="blank">New</a>
            </li>
            <li>
              <a href="/stats.html" target="blank">Art</a>
            </li>
            <li>
              <a href="/download" target="blank">Music</a>
            </li>
          </ul>

          <h2 className={style['nav-title']}>NAVIGATION</h2>

          <ul className={style['nav-ul']}>
            <li>
              <a href="/" target="blank">Home</a>
            </li>
            <li>
              <a href="/blog" target="blank">Blog</a>
            </li>
            <li>
              <a href="/stats.html" target="blank">Stats</a>
            </li>
            <li>
              <a href="/download" target="blank">Download</a>
            </li>
          </ul>
        </li>

        <li className={style['nav-item2']}>
          <h2 className={style['nav-title']}>My Profile</h2>

          <ul className={style['nav-ul']}>
            <li>
              <a href="/" target="blank">Profile</a>
            </li>
            <li>
              <a href="/blog" target="blank">Favorites</a>
            </li>
            <li>
              <a href="/stats.html" target="blank">My Collections</a>
            </li>
            <li>
              <a href="/download" target="blank">Settings</a>
            </li>
          </ul>

          <h2 className={style['nav-title']}>Resources</h2>

          <ul className={style['nav-ul']}>
            <li>
              <a href="/" target="blank">Help Center</a>
            </li>
            <li>
              <a href="/blog" target="blank">Platform Status</a>
            </li>
            <li>
              <a href="/stats.html" target="blank">Partners</a>
            </li>
            <li>
              <a href="/download" target="blank">Suggestions</a>
            </li>
          </ul>

        </li>

        <li className={style['nav-item']}>
          <h2 className={style['nav-title']}>
            Sponsored by
          </h2>
          <ul ul className={style['nav-ul']}>
            <li>
              <p>
                <a href="/">
                  ALT DECK
                </a>
              </p>
            </li>
          </ul>
          <h2 className={style['nav-title']}>SOCIAL</h2>
          <ul className={style['nav-ul']}>
            <li><p>Be sure to give us a follow on: </p></li>
          </ul>
          <div className={`col ${style.col}`}>
            <ul className={style.social}>
              <li>
                <a
                  href="https://telegram.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-telegram fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-2x" />
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li className={style['footer_docs']}>
          <h4 className={style['nav-title3']}>Alt Deck Technology</h4>
            <div>
              <ul className={style['nav-ul1']}>
                <li>
                  <Link to ="/Privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to ="/Tos">Terms of Service</Link>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </footer>
  </>
);
export default Footer;
