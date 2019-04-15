var $nav = $('.page-navigation');
$('.page-header .active').on('click', function() {
	if($('body').width() <= 600) {
		if($nav.height() <= 40) {
			$nav.css({ height: 'auto' });
		} else {
			$nav.css({ height: 32 });
		}
	}
	return false;
});

$('.item-num-modify').on('click', function() {
	let $this = $(this);
	let $num = $this.siblings('input');
	let num = parseInt($num.val()) || 0;
	if($this.hasClass('item-num-minus')) {
		num = Math.max(num-1, 0);
	} else {
		num++;
	}
	$num.val(num);
});