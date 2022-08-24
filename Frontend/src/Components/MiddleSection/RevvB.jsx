import { RevvBlock } from "./RevvBlock";
import styles from "./MiddleSection.module.css";
import Grid from "@material-ui/core/Grid";
const imgblock = [
  {
    title: "100% Delivery & Pickup",
    img: "https://www.revv.co.in/imgs/whyrevv/1.jpg",
    para:
      "For every booking, every car model. With industry leading on-time performance. We love to make things easy for you!",
    bii: "https://www.revv.co.in/imgs/whyrevv/7.jpg"
  },
  {
    title: "No Limits",
    img:
      "https://www.revv.co.in/imgs/whyrevv/x2.jpg.pagespeed.ic.8Dnc9yIeZ4.jpg",
    bii:
      "https://www.revv.co.in/imgs/whyrevv/x8.png.pagespeed.ic.iu85okVCtJ.jpg",
    para:
      " Drive as much as you want with unlimited kms. Just like your own car!"
  },
  {
    title: "New Fleet",
    img: "https://www.revv.co.in/imgs/whyrevv/5.jpg",
    bii: "https://www.revv.co.in/imgs/whyrevv/11.jpg",
    para:
      " Our fleet addition process ensures that majority of our cars are only a few months old at any time. Say goodbye to bad cars!"
  },
  {
    title: "0 Hidden Charges",
    bii: "https://www.revv.co.in/imgs/whyrevv/10.jpg",
    para:
      "Our tariffs include taxes & insurance. And since our tariffs do NOT include fuel, it means you pay for only as much fuel as you use!",
    img:
      "https://www.revv.co.in/imgs/whyrevv/x4.jpg.pagespeed.ic.abF_34Z-88.jpg"
  },
  {
    title: "Limited Liability",
    img: "https://www.revv.co.in/imgs/whyrevv/3.jpg",
    para:
      "Enjoy complete peace of mind with your liability limited to Rs. 10000. In case of any unfortunate incident, our insurance cover will take care of the rest!",
    bii: "https://www.revv.co.in/imgs/whyrevv/9.jpg"
  },
  {
    title: "Booking in 2 minutes",
    img:
      "https://www.revv.co.in/imgs/whyrevv/x6.jpg.pagespeed.ic.jZOnJxBh3y.jpg",
    bii: "https://www.revv.co.in/imgs/whyrevv/12.jpg",
    para:
      "No hassle of uploading your driving license and waiting for its approval. Easy enough!"
  }
];
function RevvB() {
  return (
    <div style={{ width: "75%", margin:"auto",marginTop:"2rem",marginBottom:"2rem" }}>
      <h3 style={{ marginLeft: "0", fontSize: "3em" }}>Why Revv</h3>
     <div style={{marginLeft:"-25px"}}>
      <Grid container spacing={3}>
        {imgblock.map((item) => {
          return (
            <Grid item xs={12} md={4} lg={4}>
              <RevvBlock
                para={item.para}
                bii={item.bii}
                cls={styles.revvblock}
                bi={item.img}
                title={item.title}
              />
            </Grid>
          );
        })}
        </Grid>
        </div>
    </div>
  );
}
export { RevvB };
