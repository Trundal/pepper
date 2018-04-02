var articles = [
    {
        headline: "Headline 1",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia nec ligula et bibendum. Vivamus imperdiet vel elit rutrum interdum. Suspendisse magna justo, congue eget nisl sed, volutpat volutpat nisl. Duis faucibus gravida lorem a pellentesque. Sed ut auctor urna, et ullamcorper dui. Nunc sit amet arcu rhoncus, accumsan massa ut, iaculis metus. Ut vehicula lorem ac congue posuere.",
            "Nulla facilisi. Sed aliquet velit sed dui congue, ut consequat purus ornare. Nullam quis mauris felis. In eget ullamcorper est. Donec a dictum lorem. Mauris lectus nulla, laoreet porttitor laoreet sed, egestas sed sem. Nam gravida feugiat turpis, sed tristique elit sollicitudin non. Sed convallis eget nunc nec interdum. Integer viverra lacus nec velit semper rhoncus. Nulla facilisi. Ut sed velit purus. Sed a nisi lorem."
        ]
    },
    {
        headline: "Headline 2",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate diam pulvinar, sollicitudin nibh vel, semper massa. Cras turpis sem, tempor sit amet volutpat at, suscipit in enim. Donec tincidunt nisi vel viverra egestas. Praesent tincidunt, massa vel ultricies finibus, massa nisl maximus risus, nec mattis nulla velit eu libero. Fusce convallis tortor sed pellentesque malesuada. Quisque sed sem erat. Sed congue sapien et convallis cursus. Aliquam non sem cursus, lobortis urna et, fringilla magna. Nullam iaculis et dolor sit amet ultrices. Fusce viverra vitae libero nec pretium.",
            "Etiam ipsum metus, aliquam eu enim eget, scelerisque aliquam erat. Vestibulum interdum, risus et volutpat tincidunt, dui nisl elementum quam, sed fermentum erat nibh ut leo. Mauris sed massa eu diam interdum rutrum. In hac habitasse platea dictumst. Nulla quis dui id dolor tincidunt molestie. In ut lorem sollicitudin, placerat elit sit amet, iaculis nunc. Pellentesque eget congue est. Cras vel lacinia sapien. Integer posuere dictum cursus. Curabitur finibus velit id lectus tempus porta. Pellentesque at vulputate nisi, in volutpat libero. Fusce laoreet eu libero vel vehicula. Duis ultrices turpis magna, nec malesuada lorem rhoncus nec."
        ]
    },
    {
        headline: "Headline 3",
        content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue tortor vitae feugiat imperdiet. Vestibulum ullamcorper eros tellus, a ultrices elit aliquet nec. Pellentesque porttitor magna purus, ac tristique odio posuere sit amet. Fusce vel libero massa. Nunc vehicula fermentum rhoncus. Quisque sapien massa, commodo ac neque eget, lobortis eleifend justo. Integer sed condimentum ante. Nulla lectus ipsum, mollis nec eleifend et, molestie fringilla diam. Sed eu tortor ac sem sagittis mollis ac at lectus. Vivamus erat tellus, tempor quis odio in, molestie gravida turpis. Maecenas hendrerit finibus lectus, in lacinia mauris consequat et. Vivamus finibus neque lacus, sit amet tincidunt orci volutpat vel.",
            "Nam eget tincidunt felis, id ultricies felis. Ut vel massa mollis, imperdiet ante eget, auctor augue. Phasellus non nisl nunc. Morbi convallis lectus vel risus auctor, et ornare sapien eleifend. Sed elit urna, consectetur eu augue sit amet, commodo vehicula tortor. Mauris vel dictum sem. Etiam at arcu eget justo feugiat varius non id purus. Cras id sapien nisl."
        ]
    }
];

function activateTab(tabNumber) {
	$('.sideBar__tab, .sideBar__article').removeClass('active');
	$('.sideBar__tab:nth-child(' + tabNumber + '), .sideBar__article:nth-child(' + (tabNumber + 1) + ')').addClass('active');
}

function displayArticle(article) {
    var tmp = "<div class='sideBar__headline'>" + articles[article].headline + "</div>" + "<div class='sideBar__copy'>";
        $.each(articles[article].content, function (index, value) { 
            tmp += "<p>" + value + "</p>" });
        tmp += "</div>";
    $('.sideBar__article.active').append(tmp);
}

$( document ).ready(function() {

    $('.sideBar__tab').click(function() {
        if (!$(this).hasClass('active')) {
            activateTab($(this).index()+1);
            if (!$(".sideBar__article.active").children().length > 0) {
                displayArticle($(this).attr("data-articleID"));
            }
        }
    });

});