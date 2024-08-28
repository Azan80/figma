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
  const index = 0;
  const authImg = courses[index] ? courses[index].authimg : '';
  const Price = courses[index] ? courses[index].price :''
  const Time = courses[index] ? courses[index].duration :''
  const Book= courses[index] ? courses[index].book:''
const Lecture = courses[index] ? courses[index].lectures:''
const Clock = courses[index] ? courses[index].clock:""


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
          and knows how to implement them. We dont give our students <br />
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
                  <span className={styles.price}>{course.price}.00</span>
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
      <div className={styles.container3}>
        <div  className={styles.heading}>
      <p>Browse {'>'} Photography {'>'} Education</p>
        </div>
        <h1 className={styles.subHead}>The Art of Seeing Photography<br></br>
         Training for the Artist in You</h1>
         <p className={styles.ContainerDescription}> 
         Learn Practical Skills to Teach Online. Master the foundations<br></br>
for creating engaging and effective online learning<br></br>
and teaching
         </p>
        <div className={styles.Star}>
          <p> ⭐⭐⭐⭐<a style={{
color: 'white',
          }}>☆</a></p>
        </div>
        <button className={styles.PhotoGraphy}>Photography</button>
    <div className={styles.authImage}>
    {authImg ? (
        <img src={authImg} alt="Author Image" style={{ width: '40px', height: 'auto' }} />
      ) : (
        <p>No image available</p>
      )}<a style={{
        color: 'white',
        marginTop:"1%",
        marginLeft:"2%"      }}>by Jonathan Bakes</a>
    </div>
    <div className={styles.List}>
      <div className={styles.detailItem}>
        {Price ? (
          <p className={styles.price}>${Price}.00</p>
        ) : (
          <p>No price available</p>
        )}
      </div>


      <div className={styles.detailItem}>

      {Clock ? (
          <img className={styles.clock} src={Clock}  />
        ) : (
          <p>No time information available</p>
        )}


        {Time ? (
          <p className={styles.time}>{Time}</p>
        ) : (
          <p>No time information available</p>
        )}
      </div>

      <div className={styles.detailItem}>
        {Book ? (
          <img className={styles.bookImage} src={Book} alt="Book" />
        ) : (
          <p>No book image available</p>
        )}


  
        {Lecture ? (
          <p className={styles.lectureCount}>
            {Lecture} Lectures
          </p>
        ) : (
          <p>No lecture information available</p>
        )}
      </div>
    </div>
      <button className={styles.EnrollBtn}>
        Enroll For Free
      </button>
      <div className={styles.Enroll}>
      <p>Enroll to start your 7-day<br></br>
full access free trial</p>
      </div>
    
      </div>
      <div className={styles.Container4}>

        <h1 className={styles.chooseHead}>Why Choose Us</h1>
        <div className={styles.offers}>
      <div className={styles.offerItem}>
        <h3>Expert Mentor</h3>
        <p>
          We have an expert mentor for our<br />
          students, who guide them<br />
          towards success.
        </p>
      </div>
      <div className={styles.offerItem1}>
        <h3>Child Management</h3>
        <p>
        We have an experts mentor for our
students, who guide them 
towards success.
        </p>
      </div>
      <div className={styles.offerItem2}>
        <h3>Group Study</h3>
        <p>
        We have an experts mentor for our
students, who guide them 
towards success.
        </p>
      </div>
    </div>

    {/* <div className={styles.Container5}>
      <div className={styles.Students}>

      
      <h2>What Our Students Say</h2>
      <p>Thank you for this course. I get to know experience<br></br> and knowledge in using different kinds of online <br></br>
tools which are useful and effective. I'll use <br></br>
some of them during my lessons. And <br></br>
lots of thanks</p>

</div>
      
    </div> */}
 
      </div>
    </div>
  );
};

export default Content;
