!function(window,document,$,undefined){
	var init=function(){
		bindEvent();
		 
		getTableData();
	};
	var bindEvent=function(){
		$('#newBtn').on('click',onNewBtnClick);
		$('#saveBtn').on('click',onSaveBtnClick);
	};
	var onSaveBtnClick = function(){
		var data = {
			titlt:$('#title').val(),
			price:$('#price').val(),
			detail:$('#detail').val(),
			amount:$('#amount').val(),
			classify:$('#classify').val(),
			status:$('input[name=status]:checked').val()
		};
		// TODO 表单验证
		if(data.title == ''){
			alert('商品名称不能为空！');
			return;
		};
		if(data.title == ''){
			alert('商品名称不能为空！');
			return;
		};
		if(data.title == ''){
			alert('商品名称不能为空！');
			return;
		};
		if(data.title == ''){
			alert('商品名称不能为空！');
			return;
		};
		if(data.title == ''){
			alert('商品名称不能为空！');
			return;
		};
		console.log(data);
	};
	var onNewBtnClick = function(){
		$('#goodsDlg').modal();
	};
	var getTableData=function(){
		var url="../../api/shopping_goods_list.php"
		$.get()
	}





    $(document).ready(init);
    //init();

}(window,document,jQuery);