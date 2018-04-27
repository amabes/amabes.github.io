if(typeof(FOLIO) == 'undefined'){
    var FOLIO = {
        data:{
            media:[{
                title:'Queen Latifah',
                link:'http://queenlatifah.com',
                img:'imgs/queen-responsive.jpg',
                body:'2013. Contracted (<a href="http://www.xivic.com" target="_blank" title="XIVIC">XIVIC</a>) to create a responsive website for Queen Latifah on the Drupal (7) content management system.',
                tech:['drupal7']
            },{
                title:"Nature's Way",
                link:'http://feelalive.com',
                img:'imgs/feelalive-natures-way.jpg',
                body:'2013. Contracted (<a href="http://sabertooth.tv" target="_blank" title="Sabertooth Interactive">Sabertooth Interactive</a>) to create the new Nature\'s Way Alive interactive website on the Drupal (7) content management system.',
                tech:['drupal7']
            },{
                title:"28 North",
                link:'http://28north.com',
                img:'imgs/28north-band.jpg',
                body:"2013. Created the official 28North website which aggregates data from the APIs of YouTube, Blogger, Twitter, Facebook and Tumblr to keep it automatically up to date.",
                tech:['html','css','javascript']
            },{
                title:'Not Impossible Labs',
                link:'http://www.notimpossiblelabs.com',
                img:'imgs/not-impossible-labs.jpg',
                body:'2013. Contracted (<a href="http://sabertooth.tv" target="_blank" title="Sabertooth Interactive">Sabertooth Interactive</a>) to create a responsive user generated website for Not Impossible Labs on the Drupal (7) content management system.',
                tech:['drupal7']
            },{
                title:"Nuko Toys",
                link:'http://nukotoys.com',
                img:'imgs/nuko-toys.jpg',
                body:'2012. Contracted (<a href="http://sabertooth.tv" target="_blank" title="Sabertooth Interactive">Sabertooth Interactive</a>) to create a responsive website for Nuko Toys on the Drupal (7) content management system.',
                tech:['drupal7']
            },{
                title:"Todd Bracken Jewelry",
                link:'http://toddbracken.com',
                img:'imgs/todd-bracken-jewelry.jpg',
                body:"2012. Contracted (Breaking Development) to create Todd Bracken's website built on the Drupal (6) content management system.",
                tech:['drupal6']
            },{
                title:"All Access, Inc.",
                link:'http://allaccessinc.com',
                img:'imgs/all-access-inc-staging-production-services.jpg',
                body:'2011. Contracted (<a href="http://www.executionists.com" target="_blank" title="Executionists">Executionists</a>) to create the new All Access, Inc. corporate website on the Drupal (6) content management system.',
                tech:['drupal6']
            },{
                title:"Orienteering USA",
                link:'http://orienteeringusa.org',
                img:'imgs/orienteering-usa.jpg',
                body:"2011. Contracted (Breaking Development) to design and engineer the new US Orienteers corporate website on the Drupal (6) content management system.",
                tech:['drupal6']
            },{
                title:'Media Policy Center',
                link:'http://mediapolicycenter.org',
                img:'imgs/media-policy-center.jpg',
                body:"2010. Contracted (Breaking Development) to design and engineer the new Media Policy Center, Growing Greener Schools, GGS Magazine and Designing Healthy Communities websites on the Drupal (6) content management system.",
                tech:['drupal7']
            }],
            // products:[{
            //     img:'imgs/products-sendus-tooltip.jpg',
            //     body:"Finding a balance between hand holding users and letting them intuitively discover key features of the user interface can be quite challenging. I worked closely with the design and product teams to create and refine an ever evolving setup process which is clear and unobtrusive."
            // },{
            //     img:'imgs/products-sendus-dashboard.jpg',
            //     body:"A dashboard is crucial to the success of any SASS product. I worked closely with the product team to create wireframes and engineer an interface to concisely display multiple sophisticated features on a single screen."
            // },{
            //     img:'imgs/products-sendus-media.jpg',
            //     body:"From wireframes to execution, I engineered how users digest the thousands of media submissions which pour in during a campaign. The overarching challenge posed by our CEO was to display media in a way which was familiar to users in order to avoid unnecessary user education. Ultimately we decided to display media as if it were an email, organizing and creating a layout on par with industry leaders in that space."
            // },{
            //     img:'imgs/products-sendus-review-queue.jpg',
            //     body:'From wireframes to execution, I engineered how multiple users can digest massive amounts of media simultaneously without impeding the progress of other users by decreasing the chances of users viewing media that has already been watched or reviewed through their "Review Queue."'
            // },{
            //     img:'imgs/products-sendus-analytics.jpg',
            //     body:"Analytics are crucial to the success of any SASS product. Users need to understand, at the macro and micro level, what activity is happening so they can be be informed and make better decisions."
            // },{
            //     img:'imgs/products-sendus-widgets.jpg',
            //     body:"From wireframes to execution, I engineered how users create and manage our many web based applications (widgets). In addition to the management interface, I was also on the team which engineered the photo editor depicted above."
            // }],
            projects:[{
                title:'White Hat Music Promotion',
                link:'https://github.com/amabes/White-Hat-Music-Promotion',
                website:'http://getwhitehat.com',
                img:'imgs/projects-white-hat-logo.png',
                body:"Helps artists promote their music on SoundCloud for FREE with simple mobile friendly tools."
            },
            {
                title:'Overzealous Modal',
                link:'https://github.com/amabes/overzealous-modal',
                website:'https://github.com/amabes/overzealous-modal',
                img:'imgs/projects-overzealous-modal-logo.png',
                body:"A lightweight jQuery plugin for oversized modals in web based applications."
            }],
            social_media:[{
                title:'LinkedIn',
                link:'https://www.linkedin.com/in/alanmabry',
                img:'imgs/social-media-linkedin.png',
                css:'linkedin'
            },{
                title:'Email Alan Mabry',
                link:'mailto:frontend@alanmabry.com',
                img:'imgs/social-media-email.png',
                css:'email'
            },{
                title:'Fork Me on GitHub',
                link:'https://github.com/amabes',
                img:'imgs/social-media-github.png',
                css:'github'
            }]
        },
        fn:{
            page:function(params){
                console.log(params);
                $('#social_media').html($('#social_media_tmpl').tmpl(FOLIO.data.social_media));
                $('#social_media_btm').html($('#social_media_tmpl').tmpl(FOLIO.data.social_media));
            },
            page_callback:function(params){
                if(params.page == 'freelance'){ // freelance
                    $('#medias').html($('#media_tmpl').tmpl(FOLIO.data.media)); // Load Examples.
                    $('.media-link a[href="http://nukotoys.com"], .img-link[href="http://nukotoys.com"]').modool({
                        steps:[{
                            tmpl:'#media_nuko',
                            title:'Nuko Toys Screencast',
                            height:'442px',
                            width:'790px',
                            rbtn:false,
                            tmpl_callback:function(){
                                $('#modool-body').addClass('loading');
                            }
                        }]
                    });
                }else if(params.page == 'products'){ // products
                  // $('#products').html($('#product_tmpl').tmpl(FOLIO.data.products));
                }else if(params.page == 'projects'){ // products
                  $('#projects').html($('#project_tmpl').tmpl(FOLIO.data.projects));
                }
            },
            calculate_percent:function(num){
                num = parseInt(num);
                var new_percentage = (10-num)*10;
                return new_percentage;
            }
        }
    }
}

$(document).ready(function(){
  FOLIO.fn.page();
});
