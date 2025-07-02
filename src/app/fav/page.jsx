"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import { GlobalFavContext } from '../../../context/FavContext'
import { FaHeart, FaTrashAlt } from 'react-icons/fa'
import styles from './fav.module.css'
import { useRouter } from 'next/navigation'

const Fav = () => {
  const { fav, removeFav } = useContext(GlobalFavContext)
  const router = useRouter()

  const handleBackToProduct = (id) => {
    router.push(`clothesProduct/${id}`)
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>My Favorites</h1>

      {fav.length === 0 ? (
        <div className={styles.emptyState}>
          <p style={{textAlign:"center"}}>No favorite items yet. Start adding some!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {fav.map((item, index) => (
            <div key={index} className={styles.card}>
              
           
              <div onClick={() => handleBackToProduct(item.id)} className={styles.imageWrapper}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title || "Product Image"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', borderRadius: 'var(--border-radius)' }}
                    priority={index < 3}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>No Image</div>
                )}
              </div>

              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{item.title || "Product Title"}</h2>
                <FaHeart className={styles.icon} />
              </div>

              <p className={styles.cardDesc}>
                {item.description?.slice(0, 100) || "No description available."}...
              </p>

             
              <button
                className={styles.removeBtn}
                onClick={() => removeFav(item.id)}
              >
                <FaTrashAlt size={16} />
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Fav
