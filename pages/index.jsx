import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "@/components/header"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Layout from './components/layout'

export default function Home() {
  return (
  <>
    <header>
      header
    </header>


    <main>
      <div className={styles.text}>
      <h1>
        CUBE
      </h1>
      <p>
        アウトプットしていくサイト
      </p>
      </div>
    </main>


    <footer>
      footer
    </footer>
    </>
  )
}
