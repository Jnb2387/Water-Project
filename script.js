angular.module('myApp',[])
    .controller('firstController', ['factory',firstControllerFunc])
        .controller('secondController',['factory',secondControllerFunc])
            .factory('factory',[factory])
//First Controller
        function firstControllerFunc(factory){
            var myfirstCtrl= this;
            myfirstCtrl.area= factory.area
            myfirstCtrl.zipy=8
            myfirstCtrl.submitZip = function(){
                factory.area.filter(function(element){
                    // console.log(name)
//loop through users input to match zipcodes

                    for(var i = 0;i < myfirstCtrl.searchZip.length; i++){
                        if(myfirstCtrl.searchZip === lakewood.zipcode){
                           console.log('Working')
                        }else {
                            // return console.log("not a zip")
                        }
                    }
                    return true
                })
                console.log(lakewood.violations)
            }
//Constructor instead of factory??
            function zips(zipcode, rating, violations, linktohelp, imageofresult){
                this.zipcode = zipcode;
                this.rating = rating;
                this.violations = violations;
                this.linktohelp = linktohelp;
                this.imageofresult = imageofresult;
                }
            var lakewood = new zips(80227,"Average", 1, '', null)
            var boulder = new zips(80301,'Average', 4, '', null)
            var flint = new zips(48501,"Death", 18, '', null)
        }
//Second Controller
        function secondControllerFunc(factory){
            var mysecondCtrl= this;
        }
//Factory Area 
        function factory(){
            var area = [
                {
                 zipcode:80227,
                 name:'Lakewood, Colorado',
                 rating:'Average',
                 violations:1,
                 linktohelp:"",
                 imageofresult:""
                },
                {
                 zipcode:48501,
                 name:'Flint, Michigan',
                 rating:'Death',
                 violations:18,
                 linktohelp:"",
                 imageofresult:""
                },
                {
                 zipcode:80301,
                 name:'Boulder, Colorado',
                 rating:'Average',
                 violations:1,
                 linktohelp:"",
                 imageofresult:""
                },
                {
                 zipcode:8,
                 name:'Boulder, Colorado',
                 rating:'Average',
                 violations:1,
                 linktohelp:"",
                 imageofresult:""
                }
            ]
            return {
                area:area
                
            }
        }