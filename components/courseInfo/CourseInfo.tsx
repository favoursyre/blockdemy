"use client"
///Course Info component

///Libraries -->
import styles from "./courseInfo.module.scss"
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import { courses } from "@/config/database";
import { useState } from "react";
import { ICourse } from "@/config/interfaces";
import bdt from "@/public/images/bdt.png"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

///Commencing the code 

/**
 * @title Course Info Component
 * @returns The Course Info component
 */
const CourseInfo = () => {
    const stars = [0, 1, 2, 3, 4]
    const [course, setCourse] = useState<ICourse>(courses[1])

  return (
    <>
        <div className={styles.upper}>
            <div className={styles.path}>
                <span>Home</span>
                <KeyboardArrowRightIcon className={styles.icon} />
                <span>Test</span>
                <KeyboardArrowRightIcon className={styles.icon} />
            </div>
            <div className={styles.brief}>
                <span className={styles.span1}>Smart Contracts Unleashed</span>
                <span className={styles.span2}>Dive into the world of blockchain technology, mastering the design and implementation of smart contracts for decentralized and secure digital transactions.</span>
            </div>
            <div className={styles.info}>
                <div className={styles.rating}>
                    <div className={styles.div}>
                        <span>4.7</span>
                        {stars.map((star, id) => (
                            <StarIcon className={styles.icon}/>
                        ))}
                    </div>
                    <span className={styles.span}>(791 ratings)</span>
                </div>
                <div className={styles.duration}>
                    <span>Duration of the course:</span>
                    <span>7 hours</span>
                </div>
                <div className={styles.author}>
                    <span>Created by:</span>
                    <span>Eleanor Pena</span>
                </div>
            </div>
        </div>
        <div className={styles.lower}>
            <header>
                <span className={styles.title}>COURSE: Smart Contracts Unleashed</span>
                <div className={styles.rating}>
                    {stars.map((star, id) => (
                        <StarBorderIcon className={styles.icon}/>
                    ))}
                    <span>Rate the course</span>
                </div>
            </header>
            <div className={styles.top}>
                <span className={styles.title}>What you will learn</span>
                <ul>
                    <li>Smart Contracts: Gain a solid understanding of what smart contracts</li>
                    <li>Writing Your First Smart Contract on Ethereum blockchain</li>
                    <li>The programming language used to write smart contracts on Ethereum</li>
                    <li>Advanced Solidity Programming  in topics like, modifiers, error handling</li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <span className={styles.title}>Course content</span>
                <div className={styles.contents}>
                    <div className={styles.content1}>
                        <span className={styles.text}>Introduction to Smart Contracts</span>
                        <button><span>Download pdf</span></button>
                    </div>
                    <div className={styles.content2}>
                        <span className={styles.text}>Solidity Basics</span>
                        <button><span>Download pdf</span></button>
                    </div>
                    <div className={styles.content3}>
                        <span className={styles.text}>Writing Your First Smart Contract</span>
                        <button><span>Download pdf</span></button>
                    </div>
                    <div className={styles.content4}>
                        <span className={styles.text}>Security Considerations</span>
                        <button><span>Download pdf</span></button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.card1}>
                <div className={styles.imageDiv}>
                    <Image
                      className={styles.image} 
                      alt=""
                      src={courses[0].image ? courses[0].image : ""}
                    />
                </div>
                <div className={styles.brief}>
                    <div className={styles.head}>
                        <span className={styles.title}>Smart Contract Unleashed</span>
                        <div className={styles.amount}>
                            <Image
                                className={styles.image} 
                                alt=""
                                src=""
                            />
                            <span>2</span>
                        </div>
                    </div>
                    <span className={styles.text}>To enroll, you need Blockdemy tokens. Purchase</span>
                </div>
                <button><span>Enroll Now</span></button>
                <div className={styles.progress}>
                    <span>Your Progress</span>
                    <div className={styles.bar}>
                        <div className={styles.inner}></div>
                    </div>
                    <span>0% complete</span>
                </div>
            </div>
            <div className={styles.card2}>
                <div className={styles.imageDiv}>
                    <Image
                        className={styles.image} 
                        alt=""
                        src={bdt}
                    />
                </div>
                <div className={styles.brief}>
                <span className={styles.title}>{course.title}</span>
                <span className={styles.description}>{course.description}</span>
                </div>
                <div className={styles.info}>
                <div className={styles.keyword}>
                    <span>{course.keyword}</span>
                </div>
                <div className={styles.rate}>
                    <StarIcon className={styles.icon} />
                    <span className={styles.figure}>{course.rating}</span>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default CourseInfo;