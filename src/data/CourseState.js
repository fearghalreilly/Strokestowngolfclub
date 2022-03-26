import { v4 as uuidv4 } from "uuid";
import url1 from '../videos/hole1.mp4'
import url2 from '../videos/hole2.mp4'
import url3 from '../videos/hole3.mp4'
import url4 from '../videos/hole4.mp4'
import url5 from '../videos/hole5.mp4'
import url6 from '../videos/hole6.mp4'
import url7 from '../videos/hole7.mp4'
import url8 from '../videos/hole8.mp4'
import url9 from '../videos/hole9.mp4'

export const CourseState = () => {
  return [

    
  
        {
          hole: "Hole 1 & 10",
          par:
          "Par 4 (Ladies Par 5) - Men 378M  Ladies 363M",
          info: "The first hole lined with trees down the right side of middle is the only way to set up for a good approach into the green, taking both bunkers out of play.",
          url: url1,
        
        },
        {
          hole: "Hole 2 & 11",
          par:
          "Par 4 (Ladies Par 4) - Men 337M  Ladies 310M",
          info: "The second hole is a shorter par four with internal out of bounds between the left and the practice ground. After the tee shot the hole follows a slight dog-leg left and uphill to the green. The green itself slopes down to the front and there is never a gimmie on this hole",
          url: url2,
          },
          {
            hole: "Hole 3 & 12",
            par:
            "Par 3 (Ladies Par 3) - Men 135M  Ladies 121M",
            info: "The third hole is a short par three that looks simple, however the wind affects club choice. The difference in clubs can be two or three, with the real danger in being too long. Again, not a straighforward green, particulary when the pin is situated toward the back.",
            url: url3,
          },
          {
            hole: "Hole 4 & 13",
            par:
            "Par 4 (Ladies Par 4) - Men 355M  Ladies 325M",
            info: "The fourth hole is stroke index one with a reason. With a good drive you could be playing a short iron into a green with a gulley short, pond to the right and out of bounds all along the right side of the hole. Again, the wind has a huge influence on how you can play the hole and a par is always satisfying",
            url: url4,
          },
          {
            hole: "Hole 5 & 14",
            par:
            "Par 3 (Ladies Par 3) - Men 119M  Ladies 111M",
            info: "The fifth hole is a short par three with water along the right and a gulley running in front of the green. The wind is usually in front or behind which again affects club choice. The green is tricky as well with a slope down towards the front which means balls landing in the middle usually spin off to the front.",
            url: url5,
          },
          {
            hole: "Hole 6 & 15",
            par:
            "Par 4 (Ladies Par 4) - Men 340M  Ladies 269M",
            info: "The 6th hole is always a good hole to get on back! A wayward drive should still give you a shot to the green, unless behind a tree. The shortness of the hole means a short iron into the green for big hitters. The only danager being a tree in the middle of the fairway, which can sometimes punish a good drive.",
            url: url6,
          },
          {
            hole: "Hole 7 & 16",
            par:
            "Par 4 (Ladies Par 4) - Men 352M  Ladies 342M",
            info: "The seventh hole has no bunker, however that makes the hole no easier. Two good shots will put you on the green, but threes down the left and right will punish slight mistakes. The downward slope in front of the green will push shots through the green in the summer, leaving a difficult chip back.",
            url: url7,
          },
          {
            hole: "Hole 8 & 17 ",
            par:
            "Par 4 (Ladies Par 4) - Men 245M  Ladies 219M",
            info: "One for the big hitters. The drivable green here requires a precise shot, while others prefer a long iron or mid wood off the tee. With red stakes running along the right=hand side a drive to the left is the way to go. Again, a well placed tree in the middle of the fairway can cause problems. The small green couple with a tight pin position requires accuracy.",
            url: url8,
          },
          {
            hole: "Hole 9 & 18",
            par:
            "Par 5 (Ladies Par 5) - Men 403M  Ladies 355M",
            info: "The home run and the ruin of many a good card. The ninth is a dog legged left par five with out of bounds on the left from the tee and from the right for the second shot. Although it is makeable with two precise shots you can easily make birdie by palceing three to the green, however mistakes will be punished.",
            url: url9,
          },
    
  
    
  ];
};

export default CourseState;