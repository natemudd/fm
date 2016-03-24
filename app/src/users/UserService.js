(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        role: 'normal',
        content: 'Dolore vocent ut pro. Novum facilisi delicatissimi qui ei, no ignota disputationi eam. Liber sanctus disputationi ei vim, numquam adipisci has ad, ad dicat meliore interesset nam. Cu mei case ullamcorper, pro ex verear nostrud, tollit dolorem ut per.'
      },
      {
        name: 'Projects',
        icon: 'assessment',
        role: 'normal',
        content: 'Lorem ipsum dolor sit amet, te nihil fuisset cum, id tale definiebas contentiones mel. Has erant decore interesset ne, docendi constituam ad ius, nobis conceptam repudiandae mel in. At mea nonumy contentiones, sit duis elaboraret eu. Case recusabo qui id. In vix essent oporteat tractatos, eos meis augue veniam te. His deleniti copiosae ut, eu vel veniam verear phaedrum.'
      },
      {
        name: 'Users',
        icon: 'supervisor_account',
        role: 'admin',
        content: 'Nonumy omnium docendi an qui, his iudico eruditi mandamus an, et vis dictas omittam laboramus. Omnium lobortis vel no. In vis inani repudiare consequuntur, ad est natum noluisse suscipit, per an animal perfecto. Stet probo reformidans no usu, vim alterum mandamus in, mentitum liberavisse vel eu. Abhorreant comprehensam ex quo. Debet vocent percipit vix ei.'
      },
      {
        name: 'Settings',
        icon: 'settings',
        role: 'admin',
        content: 'Sea ut dolores vivendum vituperata, sea an errem dignissim. Sea modus nihil noluisse eu, doming insolens qui ea. An sint urbanitas pro, his at graece euismod aliquid, dicunt sapientem conclusionemque cu eam. Cu porro torquatos duo. Dicat nemore civibus nec ut.'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
