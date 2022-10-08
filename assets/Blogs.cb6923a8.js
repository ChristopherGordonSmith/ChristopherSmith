import{_ as u,r as o,o as r,c as l,w as t,a as e,b as a,d,e as f}from"./index.3a4cbde3.js";const m={},w=a("Kaggle Titanic Tutorial"),T=a(" I followed through a tutorial by Alexis Cook that went through the process of completing in a Kaggle competition. The practice competition uses a passenger dataset from the Titanic. The dataset specifies a passengers attributes such as age, sex, ticket class, etc. The dataset also indicates if they survived or not. The challenge is to create a prediction model that predicts whether a given passenger would survive. "),x=a("Going into the directory with the training data, testing data and example prediction .csv files."),v=a("Assigning training data and testing data. Also displaying the 1st five passengers with their respective data for each dataset."),y=a("Testing if gender_submission.csv prediction of all female passengers survived and all male passengers died. Since the numbers are 74% women and 18% men we can say that this prediction is significantly inaccurate. "),b=a("Using the Random Tree Model to make predictions based on a given passenger's data."),k=a(" After following the tutorial from Alexis Cook we built a prediction model that uses a random forest model. A random forest model produces trees that take each attribute of the passenger's data into account. The model uses a majority vote with the outcome of the trees to predict if the passenger survived. The model we built only accounted for the passenger's class, sex, amount of siblings and spouses, amount of parents and children. This model produced a score of .77511 accuracy. "),K=d("h1",{style:{color:"white"}},"Reference:",-1),A=d("a",{href:"https://www.kaggle.com/code/alexisbcook/titanic-tutorial/notebook"},"Alexis Cook's Titanic Kaggle Tutorial (Click me)",-1);function C(h,p){const i=o("n-h1"),s=o("n-h2"),n=o("n-image"),c=o("n-space"),_=o("n-gi"),g=o("n-grid");return r(),l(c,{vertical:""},{default:t(()=>[e(i,{style:{color:"#e4572e","font-size":"40px"}},{default:t(()=>[w]),_:1}),e(g,{cols:"1",responsive:"screen","x-gap":100},{default:t(()=>[e(_,null,{default:t(()=>[e(c,null,{default:t(()=>[e(s,{style:{color:"white"}},{default:t(()=>[T]),_:1}),e(s,{style:{color:"white"}},{default:t(()=>[x]),_:1}),e(n,{src:"assets/KaggleTutorialSnip1.png",width:"800"}),e(s,{style:{color:"white"}},{default:t(()=>[v]),_:1}),e(n,{src:"assets/KaggleTutorialSnip2.png",width:"800"}),e(s,{style:{color:"white"}},{default:t(()=>[y]),_:1}),e(n,{src:"assets/KaggleTutorialSnip3.png",width:"800"}),e(s,{style:{color:"white"}},{default:t(()=>[b]),_:1}),e(n,{src:"assets/KaggleTutorialSnip4.png",width:"800"}),e(s,{style:{color:"white"}},{default:t(()=>[k]),_:1}),e(n,{src:"assets/KaggleTutorialSnip5.png",width:"800"})]),_:1})]),_:1})]),_:1}),K,A]),_:1})}const S=u(m,[["render",C]]),N=f({__name:"Blogs",setup(h){return(p,i)=>{const s=o("n-space");return r(),l(s,{style:{padding:"50px 100px 50px 100px"}},{default:t(()=>[e(S)]),_:1})}}});export{N as default};
