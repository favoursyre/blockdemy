///This handles the course info page

///Libraries -->
import CourseInfo from "@/components/courseInfo/CourseInfo" 

///Commencing the code -->

/**
 * @title Course info page
 */
export default async function CourseInfoPage({ params: { course } }: { params: { course: string }}) {

    return (
      <main className="course_info">
        <CourseInfo />
      </main>
    )
  }