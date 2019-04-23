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
		num = Math.max(num-1, 1);
	} else {
		num++;
	}
	$num.val(num);
	$num.change();
});

$('.item-number-input').each(function() {
	let $this = $(this);
	let price = parseFloat($this.data('price'));
	$this.data('unit_total', price);
	$this.on('change', function() {
		let num = parseInt($this.val());
		$this.data('unit_total', num*price);
		$this.closest('.item-number').next('.item-price').html('￥'+(num*price).toFixed(2));
		let total = 0;
		$('.item-number-input').each(function() {
			total += parseFloat($(this).data('unit_total'));
		});
		$('.total-price').html('合 &nbsp; 计 <span>￥'+total.toFixed(2)+'</span>')
	});
});

let $layer = $('<section class="commodity-layer space-bg"></section>');
let GLOBAL_WIDTH = $('body').width();
let GLOBAL_HEIGHT = $('body').height();
$layer.appendTo('body');
$('.soft-link, .page-navigation a').each(function(i) {
	let $this = $(this);
	$this.on('click', function(e) {
		e.preventDefault();
		$layer.css({
			top: $this.offset().top,
			left: $this.offset().left,
			right: GLOBAL_WIDTH - $this.width() - $this.offset().left,
			bottom: GLOBAL_HEIGHT - $this.height() - $this.offset().top,
			opacity: 1
		}).addClass('status-end');
		setTimeout(function() {
			location.href = $this.attr('href');
		}, 700);
	});
});