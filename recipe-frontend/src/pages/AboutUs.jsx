import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";
function AboutUs() {
  const [members, setMembers] = useState([
    {
      "id": 1,
      "name": "Aarav Mehra",
      "role": "Recipe Curator",
      "image": "https://i.pravatar.cc/150?img=11",
      "bio": "Aarav is the flavor expert behind RecipeHub. He curates traditional and fusion recipes from every corner of India. Born and raised in Delhi, Aarav brings the taste of home to every plate. When not cooking, you’ll find him exploring food streets across the country."
    },
    {
      "id": 2,
      "name": "Naina Sharma",
      "role": "Food Stylist & Photographer",
      "image": "https://i.pravatar.cc/150?img=17",
      "bio": "Naina is the visual storyteller of the team. Her passion lies in styling food and capturing it through her lens. Originally from Jaipur, she turns everyday meals into visual masterpieces. Her work brings life to every recipe featured on RecipeHub."
    },
    {
      "id": 3,
      "name": "Kunal Rao",
      "role": "Backend Developer",
      "image": "https://i.pravatar.cc/150?img=19",
      "bio": "Kunal handles the tech that powers RecipeHub. A Java and Node.js specialist from Bangalore, he ensures the website runs fast and secure. He also has a soft spot for biryani and codes best with chai in hand."
    },
    {
      "id": 4,
      "name": "Simran Kaur",
      "role": "Nutrition Consultant",
      "image": "https://i.pravatar.cc/150?img=26",
      "bio": "Simran ensures every recipe on RecipeHub is both delicious and balanced. With a background in dietetics and Ayurveda, she bridges the gap between health and flavor. Based in Amritsar, she’s passionate about wholesome Indian cooking."
    },
    {
      "id": 5,
      "name": "Rohan Deshmukh",
      "role": "Frontend Developer",
      "image": "https://i.pravatar.cc/150?img=34",
      "bio": "Rohan builds the beautiful interface you see on RecipeHub. A React enthusiast from Pune, he’s obsessed with creating clean and user-friendly designs. He also dabbles in food blogging and loves experimenting with Maharashtrian dishes."
    }
  ]
  );
  // fetching team members
  // useEffect(() => {
  //   const fetchTeamMembers = async () => {
  //     const response = await fetch("/src/utils/team.json");

  //     const data = await response.json();
  //     if (data) {
  //       setMembers(data);
  //     } else {
  //       alert("No members fetched");
  //     }
  //   };

  //   fetchTeamMembers();
  // }, [members]);

  return (
    <div className="about">
      <div className="about-me">
        <div className="myimage">
        <img src="/images/me2.jpg" alt="" />
        </div>
        
        <div className="about-me-content">
          <span>
            <Link
              to="/"
              className="homepagelink"
              style={{ color: "gray", opacity: "1" }}
            >
              FIND MY RECIPE
            </Link>
            <MdOutlineKeyboardArrowRight />
            About Me
          </span>
          <h1>About Me</h1>
          <h2>
            Hi, my name is <span>Abhishek!</span>
          </h2>
          <p>
            And Find my Recipe is my little corner of the internet! I'm the voice,
            author, and creator behind Find my Recipe . What started as a casual
            hobby over 14 years ago in 2010 while I was working as a fourth
            year student has now grown into a full-blown business (!!) that
            reaches millions of people with fun recipes each month, with content
            that has been featured on The Kitchn.
          </p>
        </div>
      </div>

      <FollowUs />
      {/* <div className="i-love-food">
        <h3>I Love Food!</h3>
        <p>
          In this space, I am always sharing fresh, flavorful, (mostly) healthy
          recipes that I love to make and eat in my real, actual, every day
          life. If I wouldn’t eat it in real life, I won’t put in on the blog.
          My goal is to inspire you with food that is both approachable AND
          exciting, whether you’re cooking for yourself, your family, your
          roommates, or your friends. I want you to be so excited about these
          recipes that you eagerly await 5pm when you can go home from work and
          start cooking. On a related note, I absolutely LOVE seeing the food
          that you’re making. It will make my day if you tag @pinchofyum in your
          Instagram photos and stories! We love to shout out our favorites on
          Fridays with our Reader Awards on Instagram Stories.
        </p>
      </div> */}
      <div className="about-team">
        <h3>Our Team</h3>
        <p>We have an entire team of geniuses behind us at Pinch of Yum who are experts in a little bit of everything – from customer service, to social media, to videography, to assisting with recipe shoots. They are EVERYTHING.</p>
        <p>Our team helps keep it all running smoothly</p>
        <div className="team-grid">
          {members.map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.image} alt={member.name} />
              <div>
              <h4 className="name">{member.name} <div className="line"></div></h4>
              <p className="role">
                <strong>{member.role}</strong>
              </p>
              <p className="bio">{member.bio}</p>
              </div>
            
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
