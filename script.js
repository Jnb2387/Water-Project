angular.module('myApp',['ui.router'])
    .controller('firstController', ['factory',firstControllerFunc])
        .controller('secondController',['factory',secondControllerFunc])
            .factory('factory',[factory])
//--------------------------------------First Controller--------------------------------------
        function firstControllerFunc(factory){
            var myfirstCtrl= this;
            myfirstCtrl.area= factory.area
            myfirstCtrl.correct= factory.correct
            myfirstCtrl.something=  factory.something
            myfirstCtrl.results =''
            myfirstCtrl.submitZip = function(searchZip){
                for(var i = 0;i < myfirstCtrl.area.length; i++){
                        if(searchZip === myfirstCtrl.area[i].zipcode){
                            $('#modal-1').modal('show')
                            myfirstCtrl.results = myfirstCtrl.area[i]
                            return true
                        }
                }
                alert("Zip Not Found")
            }
            myfirstCtrl.showAnswer=false
            myfirstCtrl.submitQuiz = function(inputQuiz) {
                for(var j = 0;j < myfirstCtrl.area.length; j++){
            // myfirstCtrl.inputQuiz = myfirstCtrl.inputQuiz.toUpperCase()
                    if(inputQuiz == myfirstCtrl.something){
                        myfirstCtrl.answer = myfirstCtrl.area[j]
                         return myfirstCtrl.showAnswer = true
                    }
                }
                         alert("no")
            }
        }
//--------------------------------------Second Controller--------------------------------------
        function secondControllerFunc(factory){
            var mysecondCtrl= this;
            // mysecondCtrl.quiz=''
            //   var totalQuestions = 2;
            // mysecondCtrl.submitQuiz = function(inputQuiz) {
            //     for(var j = 0;j < mysecondCtrl.area.length; j++){
            //         if(inputQuiz=== mysecondCtrl.area[j].something){
            //         // if(inputQuiz == totalQuestions){
            //             //  myfirstCtrl.quiz = myfirstCtrl.area[j]
            //           alert("correct")
            //         }
            //     } console.log(4)
            //   var correctAnswers = 0;
            //   var alertText;
            //   var i;
            // }
        }
        
//--------------------------------------Factory Area-------------------------------------- 
        function factory(){
            var area = [
                {
                 zipcode:32501,
                 name:'Pensacola, FL',
                 rating:'Below Average',
                 where:'Pensacola imports an average of 85 percent of its water supply. Water is imported from the State Water Project water',
                 violations:21,
                 linktomore:"http://www.ecua.fl.gov/system/files/WaterQualityPageFolder/WaterQuality2014CCRforWEB.pdf",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,sKm4KjYI0XK5nzWA0zeF6E6W2RARza8IzkSlMAHBv2q3vWm7GufK49j9xKYbbyCYDXD7xTaVnJ08GS2MiNj9pA7xZKQAduvtAph-Z334Jkd9HhSPtTeQCz2iq_bkxS22xlps5yel4OrgUaoan2Zpy4O6gto-zgAjejYt3_dNsauazDVbAqUzTu2D0OPipvbrjccRV27OvhudEUoA8pXv-Fbt1L3cmDp62MSwdb4MRbp6df3dQdrTP4xunYCOnkkN8FotHXETMHTEl7I-lL5T9W9U_PIkxkXNlCCrPBPMz1gIlgQUZCBDKH5kn5lq",
                 population:' 51,608/ 356,918'
                },
                {
                 zipcode:48501,
                 name:'Flint, Michigan',
                 rating:'Death',
                 where:' Switched from Flint River to Detroit System',
                 violations:18,
                 linktomore:"https://www.cityofflint.com/wp-content/uploads/Veolia-REPORT-Flint-Water-Quality-201503121.pdf",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,GZubJB_n3931pjKm3WQdc_rU8XPUN-1YYRlhekXn6NL-xU33tH2MW6ibWoMqy28Lm_JvHxc-2-0Yc9Uxw0Td8GrjMAOG-_muREDYjuk9D1AQzpgNAxsS1ebSY1NLSHOi8WosINGPrk4l9UdbeLAou5OClwy3xOxIeTNCiaXAbhSN6bX3bnOXug-MhkW0uBCi6m0DD1b_xMH8nQZ5OT6_mYMxoZ7NFvC1KAw7UXZfqeX35Xu7bdRJ01dv7hpttgWgHk2bYwwU0S2Da3jYcDU1A3ky9xOhWv-uZDWdpctIu-X2eHZ99rn9PA9i05MU7RzMnMLdgQo4EOxvOuTDhMLP9Odzmb4Yz9auWMWK6CneZ3Udn2n3W4yTrUTF9GvvaJ6DD_kfB6-zJrne6erxbjle7VdZjqRpDEFDxXpuz7Nw-fpfNSr5a4Uf4OSeS0eSzZdP6PKlWNXpJ4p4CqKINgPUnsi1PkXPF9O5uDbBEDAd5PQUnmdtoTPQ7wYafc5Ke3zPZ8j8",
                 population:'Unknown',
                },
                {
                 zipcode:80301,
                 name:'Boulder, Colorado',
                 rating:'Above Average',
                 where:" The City of Boulder gets its water from Barker Reservoir, Lakewood Reservoir, Boulder Reservoir and Carter Lake (via the Boulder FeederCanal).",
                 violations:2,
                 linktomore:"https://www-static.bouldercolorado.gov/docs/water-report-1-201605031121.pdf",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,_RCOw0JMbnAqqRJe9H5tDPeRV1gI8myS7tF0_q8y0YvXGK9RCaqEbTgJvAoQjoQoyS5DWOFA2-0odDbSiMsZ0iQcugbXRAvnQDdaMBdtIXCO8mVuFsjeI7GUPctzehf0L7WyrzeLElfWevo57njy8bSAfic6KNmrU-jNeZQ5Kx5RwAdU0GFiQYiKHXlQF8JHbj1fSg",
                 population:' 28,069 / 374,626'
                },
                {
                 zipcode:80123,
                 name:'Denver, Colorado',
                 rating:'Average',
                 where:" Denver Water is 100 percent surface water that originates in sources throughout the watershed that encompasses 3,100 square miles on both sides of the Continental Divide.",
                 violations:6,
                 linktomore:"http://www.denverwater.org/docs/assets/DC0C0E3A-03C5-4F27-2E7ED15D1413CD18/2015WaterQualityReport.pdf",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,llR23jgvDhvSnRbYUOeo7YcyJiYcC7D9HXV_pnWx4LgNIDCsYXtPO4E4RPf3jL_-UPYfOXUadMzg5x18TCx3QxQZw8U-y8a6RKdo7RHkrbL0T3mT7geaQMvuh4tNkbpkp7vDuAALa5lslcwXG57cp3aR-zojPZ7UQ6dxG4dMOy1d-EBuo3U_aXKPWEfwf7D6QZPzrkVd091KdjbVvDnYHf9zj10nRiymeDNWb4JXCr060aMkIwduRcR77j112i2mvIrsJ8FmlKUewsNEF6Q_Z7B4F23dkCNNo25bh590XnZgvbDGoBM3Xojx7Vi2UvgMvlgYbIrYF8n2dP4zQiF3jPl2FeUgFpkU2DYLyLYGRvuqX5bgZLaxB0NPb3G54DhYorecHcTyUqAokQ04jw4",
                 population:' 113 / 472,517'
                },
                {
                 zipcode:73170,
                 name:'Oklahoma City, OK',
                 rating:'Average',
                 where:'OKC has six water supply lakes -- Atoka, Canton, Draper, Hefner, McGee Creek and Overholser',
                 violations:14,
                 linktomore:"http://www.okc.gov/CCR_2014.pdf",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,SBSQ8AgZ3JfLLw49s7GsZ-xHDTPwtbBVQHS1HKwzeisAKh0nrtC9aSIpPpc82ABvbq5RjVGOia0Y7x6Aj5CETfxSb76E8SvbIQdTiJk5xdiaL1LCnB16co3ZMi4OFx2JwGfLaDFouTsXSZxzQYfMZ2YS77qHv36xUH7pnIb2huW_Kx5l4KOy2-6lOP020B9BJ-06X99sZvtD95Z2g1ev8iinN9P-ulQxjDpXB0_c_CfRwJDi6ZT1a6XKJ8zTfybQCw43Vw-HXgEpiqa98wq3l-bYKSRVtUIGMoXkcU5xsIV4Bn9g1byTCD6Rr2d-zKs6e22Bft_FELQBOTJ6mAAtgbpmepwLTIItYPs_vaStuKFJz0W_Ok2Za3liWz13L5V9vVIp1ukeT4VKYCKUqo6zc1AwzJgABGwMIAwJHSv5j87g1SBPEP_7ZeJlBlLiAQj_LNrTtd-3QL-ottRfG1q6Uwns9fsRsWh7Qw3eVjuFDayoL-Y6XLqaccJk98lGNQMyY-MlX1gyoWT2Df9O3NQyiutPdqHp80Qasy9wFDdKy2ZwKnWMVkZaMWRz-kiSUqElDXcrPgIPNFmmXVPdVRGBqg37rcVrtbHr-O4dIEYZ_DgvhOiDcw7nY94eT06yyUi4C2Me6Dn1S3qzH7HBn5yDFeyF_q3uA9yGudqhPAprOGycYAWv391lj5PkMrTICL14Ea168C2wefg5tctwF8WtFCzktRVOpl0GBoCsrXt39ITjLyT4xXwiLJIJ9m6A3C5q9AO-ZmBMJs37yDCMdS-puZujQFk",
                 population:' 42,570 / 161,984', 
                },
                
            ]
            return {
                area:area,

                 something:"true",
                 correct:"Awesome Job!\nSales of bottled water grew nearly 7 percent \n between 2011 and 2012, with consumption reaching a staggering 30.8 gallons per person.",
                
            }
        }