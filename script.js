angular.module('myApp',['ui.router'])
    .controller('firstController', ['factory',firstControllerFunc])
        .controller('secondController',['factory',secondControllerFunc])
            .factory('factory',[factory])
// Routing
            // .config(routerConfig)
            // function routerConfig($stateProvider,$urlRouterProvider){
            //     $stateProvider
            //     .state('watersupply',{
            //         url:'/',
            //         templateUrl:'watersupply.html',
            //         controller:'firstController as myfirstCtrl'
            //     })
            //     .state('results',{
            //         url:'/results',
            //         templateUrl:'results.html'
            //     })
            //     $urlRouterProvider.otherwise('/')
            // }
//First Controller
        function firstControllerFunc(factory){
            var myfirstCtrl= this;
            myfirstCtrl.area= factory.area
            myfirstCtrl.results =''
            myfirstCtrl.submitZip = function(searchZip){
                for(var i = 0;i < myfirstCtrl.area.length; i++){
                        if(searchZip === myfirstCtrl.area[i].zipcode){
                            $('#modal-1').modal('show')
                            myfirstCtrl.results = myfirstCtrl.area[i]
                        }else {
                            // alert("Please Enter a Valid ZipCode")
                        }
                }
            }
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
                 violations:1 +', Coliform',
                 hover:"Coliform bacteria are organisms that are present in the environment and in the feces of all warm-blooded animals and humans. Coliform bacteria will not likely cause illness. However, their presence in drinking water indicates that disease-causing organisms (pathogens) could be in the water system.",
                 linktomore:"http://www.lakewood.org/Public_Works/Utilities/Drinking_Water_Utility.aspx",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,OYax_wuoH8eIRLb6hkfcHAPLSZV9JIMgx5bD4VEh_fCQuwgFBXPNkBA1EZsMvCPHYoKsWejec-WS2UrsUtaQA1nhWPUVZMd_8sXtqISiFL_P9G9BzZkmEzhldc42iDhrke6sE7VGpyFT4eh06TAozy6aIexuSR_zKe1fynySZh_P63rSORu4rRDKS9ea5HEDc1HPzdpllo9CHzpwdUioAMqM1lTIfwCe_hxiuo2HawmXJryV7vQP3_PPdezwSbfE5rAFStTjwIMzmKX7FXQkz49vdJyVyQ7Mxa5eXUczf2HlHLPVEZBDNjzSufX3BnBIc3fTyu--lbuz84T0ZzSNTt_aCowmgWTUgivNdyASNuDsmdF5Mzi6zzqu7UXaHNxHZvaJ8zTJQLXA7E47h-apELatw3Mh_woduujfhxTYFlMwo0H-uigABKiSGxrvXFFDIIIiSz0t6bEEL-ZKkROydAVoX3OkBFoaRQufBR1-QHBPGJ_JHRm0OQ5513aKJhl2HvM3xDnHe3obSLCLx7XvaMMqjzU9ic8rf-A4vqIwHfgRLxNacYzzY2S_P92t7RnSlcN8XnNnKSVY-d7Bm0hNvUovuTv9755zWKQ7MEe10M6oboK1NZp5MUQTJSoUULxa314ed3ivoLO4K0FJ25t8p1nhIaeGh24yEtELZpHafSYzd9Zlv2yrU4pxbwGlCJAhoyMURpIqMO-RMFAnBtbL8qhV7Ms-_uDYfietnq1cyIyVLmunpcRYKoyQdsemViPyX3y7U5sB2YND2TCirbjwvAAYVbVy4tAq-u3ePku3Q5tohrx6BHaOcEpNQ7MABD0A8LNG00nG6zKTmZUf_8sX6W6-9ZpWVaTVqQO_eBNFiO8OOvavvsMQL24chf4_UmyCFj2JJrRjHBMj0CBkUrguu8ecH5X5UOv71TMsad06Viu27O3H1yzXzNJUp9lzDwWXzgqMuscE1CxzRFCMKrzWSjrWAcK3Gc3y-H52D0UNC8mLvXVQOuCqEJAI_weAwcQzGnbrolhbMY8N8ou810Oaw-DqOYV6edGVz_KHPa_Q9el6rDEn2yAzZWXjzzQRQIzdhl9PBu4l"
                },
                {
                 zipcode:48501,
                 name:'Flint, Michigan',
                 rating:'Death',
                 violations:18,
                 linktomore:"https://www.cityofflint.com/public-works/utilitieswater/water-treatment-plant/",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,GZubJB_n3931pjKm3WQdc_rU8XPUN-1YYRlhekXn6NL-xU33tH2MW6ibWoMqy28Lm_JvHxc-2-0Yc9Uxw0Td8GrjMAOG-_muREDYjuk9D1AQzpgNAxsS1ebSY1NLSHOi8WosINGPrk4l9UdbeLAou5OClwy3xOxIeTNCiaXAbhSN6bX3bnOXug-MhkW0uBCi6m0DD1b_xMH8nQZ5OT6_mYMxoZ7NFvC1KAw7UXZfqeX35Xu7bdRJ01dv7hpttgWgHk2bYwwU0S2Da3jYcDU1A3ky9xOhWv-uZDWdpctIu-X2eHZ99rn9PA9i05MU7RzMnMLdgQo4EOxvOuTDhMLP9Odzmb4Yz9auWMWK6CneZ3Udn2n3W4yTrUTF9GvvaJ6DD_kfB6-zJrne6erxbjle7VdZjqRpDEFDxXpuz7Nw-fpfNSr5a4Uf4OSeS0eSzZdP6PKlWNXpJ4p4CqKINgPUnsi1PkXPF9O5uDbBEDAd5PQUnmdtoTPQ7wYafc5Ke3zPZ8j8"
                },
                {
                 zipcode:80301,
                 name:'Boulder, Colorado',
                 rating:'Average',
                 violations:4,
                 linktomore:"https://bouldercolorado.gov/water/water-treatment",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,_RCOw0JMbnAqqRJe9H5tDPeRV1gI8myS7tF0_q8y0YvXGK9RCaqEbTgJvAoQjoQoyS5DWOFA2-0odDbSiMsZ0iQcugbXRAvnQDdaMBdtIXCO8mVuFsjeI7GUPctzehf0L7WyrzeLElfWevo57njy8bSAfic6KNmrU-jNeZQ5Kx5RwAdU0GFiQYiKHXlQF8JHbj1fSg"
                },
                {
                 zipcode:80123,
                 name:'Denver, Colorado',
                 rating:'Average',
                 violations:2,
                 linktomore:"http://www.denverwater.org/WaterQuality/",
                 imageofmap:"https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,llR23jgvDhvSnRbYUOeo7YcyJiYcC7D9HXV_pnWx4LgNIDCsYXtPO4E4RPf3jL_-UPYfOXUadMzg5x18TCx3QxQZw8U-y8a6RKdo7RHkrbL0T3mT7geaQMvuh4tNkbpkp7vDuAALa5lslcwXG57cp3aR-zojPZ7UQ6dxG4dMOy1d-EBuo3U_aXKPWEfwf7D6QZPzrkVd091KdjbVvDnYHf9zj10nRiymeDNWb4JXCr060aMkIwduRcR77j112i2mvIrsJ8FmlKUewsNEF6Q_Z7B4F23dkCNNo25bh590XnZgvbDGoBM3Xojx7Vi2UvgMvlgYbIrYF8n2dP4zQiF3jPl2FeUgFpkU2DYLyLYGRvuqX5bgZLaxB0NPb3G54DhYorecHcTyUqAokQ04jw4"
                }
            ]
            return {
                area:area
                
            }
        }