"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './../../../styles/content/content.module.css';
import moduleName from '/img/image_360-3.png'
const Content = () => {
  const [visibleCourses, setVisibleCourses] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Data Science and Machine Learning with Python-Hands',
      instructor: 'Jonathan Bakes',
      category: 'Science',
      duration: '8hr 15 mins',
      lectures: 29,
      price: 116.00,
      rating: 4,
      image: 'img/ownerimg/image_480-3.png',
      author: "by Jonathan Bakes",
      authimg: 'img/pic/image_360-7.png',
      clock: 'img/icon/image (4).png',
      book: 'img/icon/image (5).png'
    },
    {
      id: 2,
      title: 'Learn to Budget and Calculate your Net Worth',
      instructor: 'Jonathan Bakes',
      category: 'Finance',
      duration: '6hr 15 mins',
      author: "by Jonathan Bakes",
      lectures: 18,
      price: 126.00,
      rating: 4,
      image: 'img/ownerimg/image_480-4.png',
      authimg: 'img/pic/image_360-8.png',
      clock: 'img/icon/image (4).png',
      book: 'img/icon/image (5).png'
    },
    {
      id: 3,
      title: 'Tackling the New Marketing Landscape; Build Your Brand',
      instructor: 'Jonathan Bakes',
      category: 'Marketing',
      duration: '8hr 15 mins',
      lectures: 29,
      price: 116.00,
      rating: 4,
      image: 'img/ownerimg/image_480-5.png',
      author: "by Jonathan Bakes",
      authimg: 'img/pic/image_360-9.png',
      clock: 'img/icon/image (4).png',
      book: 'img/icon/image (5).png'
    },
    {
      id: 4,
      title: 'Design Interaction and Color Theory in Graphics',
      instructor: 'Jonathan Bakes',
      category: 'Graphics',
      duration: '8hr 15 mins',
      lectures: 29,
      price: 116.00,
      rating: 4,
      image: 'img/ownerimg/image_480-6.png',
      author: "by Jonathan Bakes",
      authimg: 'img/pic/image_360-10.png',
      clock: 'img/icon/image (4).png',
      book: 'img/icon/image (5).png',
    },
    {
      id: 5,
      title: 'The Art of Seeing Photography Training for the Artist in You',
      instructor: 'Jonathan Bakes',
      category: 'Photography',
      duration: '8hr 15 mins',
      lectures: 29,
      price: 116.00,
      rating: 4,
      image: 'img/ownerimg/image_480-7.png',
      author: "by Jonathan Bakes",
      authimg: 'img/pic/image_360-11.png',
      clock: 'img/icon/image (4).png',
      book: 'img/icon/image (5).png'
    },
    {
      id: 6,
      title: 'Introduction to Front-End Development',
      instructor: 'Jonathan Bakes',
      category: 'IT',
      duration: '8hr 15 mins',
      lectures: 29,
      price: 116.00,
      rating: 4,
      image: 'img/ownerimg/image_480-8.png',
      author: "by Jonathan Bakes",
      authimg: 'img/pic/image_360-12.png',
      clock: 'img/icon/image (4).png',
      book: 'img/icon/image (5).png'
    },
  ];

  const toggleCourses = () => {
    setVisibleCourses(showAll ? 3 : courses.length);
    setShowAll(!showAll);
  };

  return (
    <div className={styles.container}>
      <div className={styles.floater1}>
        <Image
          src='/img/image.png'
          alt="Logo"
          width={100}
          height={40}
          className={styles.logo3}
        />
      </div>
      <div className={styles.h1}>
        <h1>Learn More and Make Success</h1>
        <h2 className={styles.gap}>the<a className={styles.color}> Result of Perfection</a></h2>
      </div>
      <div className={styles.discription}>
        <p>
          We believe the world is more beautiful as each person gets skills <br />
          and knows how to implement them. We don give our students <br />
          only lectures but professional training as well.
        </p>
      </div>
      <div className={styles.floater}>
        <Image
          src='/img/image_480.png'
          alt="Logo"
          width={100}
          height={40}
          className={styles.logo}
        />
      </div>
      <div className={styles.floater2}>
        <Image
          src='/img/image_480-1.png'
          alt="Logo"
          width={100}
          height={40}
          className={styles.logo2}
        />
      </div>
      <div className={styles.floater4}>
        <Image
          src='/img/image_360-2.png'
          alt="Logo"
          width={100}
          height={40}
          className={styles.logo4}
        />
      </div>
      <div className={styles.buttonwrapper}>
        <div className={styles.mycontainer} style={{ marginTop: '20px' }}>
          <span className={styles.text}>15 Days Trial</span>
          <button className={styles.startedBtn}>
            <span onClick={() => window.location.href='https://www.google.com/'} className={styles.orangetext}>Get Started</span>
          </button>
        </div>
      </div>

      <div className={styles.online}>
        <h1 className={styles.whyHead}>Why Online<br />Learning Method</h1>
        <p>Studying online teaches critical time management<br />
          skills, making it easier to find a good work-study.<br />
          SuChino offers 2100+ Free online courses from<br />
          highly qualified professors, to help you start <br />
          or advance your career skills Free Online.</p>
        <div className={styles.btn1}>
          <button className={styles.button1}>Learn More</button>
        </div>
      </div>

      <div className={styles.floater6}>
        <Image
          src='/img/image_360-3.png'
          alt="Logo"
          width={100}
          height={40}
          className={styles.logo6}
        />
      </div>

      <div className={styles.featurecontainer}>
        <div className={styles.featureRow}>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <Image
                src='/img/image_360-4.png'
                alt="Logo"
                width={30}
                height={30}
                className={styles.logo7}
              />
            </div>
            <h3 className={styles.title} style={{ color: '#FF5722' }}>Flexible Time</h3>
            <p>Flexible Working hours<br /> refers to the schedule<br /> which can help you.</p>
          </div>
          <div className={styles.feature3}>
            <div className={styles.icon2}>
              <Image
                src='/img/image_360-6.png'
                alt="Logo"
                width={30}
                height={30}
                className={styles.logo9}
              />
            </div>
            <h3 className={styles.title} style={{ color: '#00BCD4' }}>Access Anywhere</h3>
            <p> Students have access to their <br /> classes from anywhere.</p>
          </div>
        </div>
        <div className={styles.feature2}>
          <div className={styles.icon1}>
            <Image
              src='/img/image_360-5.png'
              alt="Logo"
              width={30}
              height={30}
              className={styles.logo8}
            />
          </div>
          <h3 className={styles.title} style={{ color: '#9C27B0' }}>Certificate</h3>
          <p>Certificates can motivate<br /> learners to complete<br /> online courses.</p>
        </div>
      </div>

      <div className={styles.container2}>
        
        <h2 className={styles.title2}>Our Trending Courses</h2>
        <div className={styles.cardContainer}>
          {courses.slice(0, visibleCourses).map((course) => (
            <div key={course.id} className={styles.card}>
              <img src={course.image} alt={course.title} className={styles.image} />
              <div className={styles.info}>
                <div className={styles.header}>
                  <img src={course.authimg} width={30} height={30} />
                  <span className={styles.author}>{course.author}</span>
                  <span className={styles.category}>{course.category}</span>
                </div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <div className={styles.details}>
                  <img src={course.clock} height={20} width={20} />
                  <span className={styles.duration}>{course.duration}</span>
                  <img className={styles.bookIcon} src={course.book} height={20} width={20} />
                  <span className={styles.lectures}>{course.lectures} Lecture</span>
                </div>
                <div className={styles.footer}>
                  <span className={styles.price}>${course.price}.00</span>
                  <div className={styles.rating}>
                    {'★'.repeat(course.rating) + '☆'.repeat(5 - course.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
   
        <div className={styles.loadMoreContainer}>
        {!showAll && (
          <button
            className={`${styles.loadMoreBtn} ${styles.seeAllBtn}`}
            onClick={toggleCourses}
          >
            See All
          </button>
        )}
  </div>
  <div className={styles.UndoContainer}>
    {showAll  &&  (
          <button
            className={styles.undobtn}
            onClick={toggleCourses}
          >
            See Less
          </button>
        )}

  </div>
     
        
      </div>
    </div>
  );
};

export default Content;
