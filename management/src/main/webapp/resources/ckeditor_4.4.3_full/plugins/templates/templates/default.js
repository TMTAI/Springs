/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR
		.addTemplates(
				"default",
				{
					imagesPath : CKEDITOR.getUrl(CKEDITOR.plugins
							.getPath("templates")
							+ "templates/images/"),
					templates : [
							{
								title : "Image and Title",
								image : "template1.gif",
								description : "One main image with a title and text that surround the image.",
								html : '<h3><img src=" " alt="" style="margin-right: 10px" height="100" width="100" align="left" />Type the title here</h3><p>Type the text here</p>'
							},
							{
								title : "Strange Template",
								image : "template2.gif",
								description : "A template that defines two colums, each one with a title, and some text.",
								html : '<table cellspacing="0" cellpadding="0" style="width:100%" border="0"><tr><td style="width:50%"><h3>Title 1</h3></td><td></td><td style="width:50%"><h3>Title 2</h3></td></tr><tr><td>Text 1</td><td></td><td>Text 2</td></tr></table><p>More text goes here.</p>'
							},
							{
								title : "Text and Table",
								image : "template3.gif",
								description : "A title with some text and a table.",
								html : '<div style="width: 80%"><h3>Title goes here</h3><table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1"><caption style="border:solid 1px black"><strong>Table title</strong></caption><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table><p>Type the text here</p></div>'
							}
							/*start: tuyennx - 01/08/2016 - add card_vccb templates*/
							,
							{
								title : "Template for Debit Card - Responsive",
								image : "",
								description : "Using for two cols - responsive",
								html : '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/3-Hang-the.png" />'
									+ '<p style="text-align: center;"><span style="color: rgb(105, 105, 105); text-align: center; font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">Thẻ Viet Capital E-Plus với 3 hạng thẻ<br />'
									+ 'Style &ndash; Pro &ndash; VIP kết nối với tài khoản tiền gửi<br />'
									+ 'thanh toán giúp chủ thẻ sử dụng và quản lý&nbsp;</span></span><br style="color: rgb(105, 105, 105); line-height: 20.8px; text-align: center;" />'
									+ '<span style="color: rgb(105, 105, 105); text-align: center; font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">tài khoản thật tiện lợi và an toàn</span></span></p>'
									+ '</div>'

									+ '<p>&nbsp;</p>'

									+ '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/Uu-dai-50.png" />'
									+ '<p style="text-align: center;"><span style="color:rgb(105, 105, 105)"><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">Tận hưởng ưu đãi đến 50% từ<br />'
									+ 'Viet Capital Bank</span></span></span></p>'
									+ '</div>'
							},
							{
								title : "Template for Debit Card Information Orther - Responsive",
								image : "",
								description : "Image text left right - responsive",
								html : '<div class="w_90per clearfix">'
												+ '<div class="alginR col-lg-6 col-md-6 col-sm-6 col-xs-12">'
												+ '<div class="col-xs-12"><img alt="" class="img-responsive center-block img_full" src="https://card.vietcapitalbank.com.vn/userfiles/images/Tien-ich-khac-Classic(4).png" style="width: 570px; height: 365px;" /></div>'
												+ '<br />'
												+ '&nbsp;</div>'
								
												+ '<div class="alginL textL col-lg-6 col-md-6 col-sm-6 col-xs-12">'
												+ '<p style="-webkit-tap-highlight-color: transparent; margin-left: 40px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 12px;"><span style="-webkit-tap-highlight-color: transparent; color: rgb(105, 105, 105);"><span style="-webkit-tap-highlight-color: transparent; font-size: 16px;"><span style="-webkit-tap-highlight-color: transparent; font-family: arial, helvetica, sans-serif;"><strong style="-webkit-tap-highlight-color: transparent;">Tiện ích khác</strong></span></span></span></p>'
								
												+ '<p style="-webkit-tap-highlight-color: transparent; margin-left: 40px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 12px;">&nbsp;</p>'
								
												+ '<ul style="-webkit-tap-highlight-color: transparent; padding-right: 0px; padding-left: 0px; margin-right: 0px; margin-left: 25px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 12px;">'
												+ '<li style="-webkit-tap-highlight-color: transparent; line-height: 20px; text-align: justify;"><span style="-webkit-tap-highlight-color: transparent; color: rgb(105, 105, 105);"><span style="-webkit-tap-highlight-color: transparent; font-size: 16px;"><span style="-webkit-tap-highlight-color: transparent; font-family: arial, helvetica, sans-serif;">Thanh toán hàng hóa dịch vụ dễ dàng và linh hoạt tại hơn 105.000 POS</span></span></span><br style="-webkit-tap-highlight-color: transparent;" />'
												+ '&nbsp;</li>'
												+ '<li style="-webkit-tap-highlight-color: transparent; line-height: 20px; text-align: justify;"><span style="-webkit-tap-highlight-color: transparent; color: rgb(105, 105, 105);"><span style="-webkit-tap-highlight-color: transparent; font-size: 16px;"><span style="-webkit-tap-highlight-color: transparent; font-family: arial, helvetica, sans-serif;">Thực hiện các giao dịch chuyển khoản/vấn tin số dư/sao kê giao dịch...<br style="-webkit-tap-highlight-color: transparent;" />'
												+ '<br style="-webkit-tap-highlight-color: transparent;" />'
														+ 'trực&nbsp;<span style="-webkit-tap-highlight-color: transparent;"><span style="-webkit-tap-highlight-color: transparent;"><span style="-webkit-tap-highlight-color: transparent;"><span style="-webkit-tap-highlight-color: transparent;"><span style="-webkit-tap-highlight-color: transparent;"><span style="-webkit-tap-highlight-color: transparent;">tiếp trên máy ATM của Viet Capital Bank</span></span></span></span></span></span></span></span></span><br style="-webkit-tap-highlight-color: transparent;" />'
														+ '&nbsp;</li>'
													+ '<li style="-webkit-tap-highlight-color: transparent; line-height: 20px; text-align: justify;"><span style="-webkit-tap-highlight-color: transparent; color: rgb(105, 105, 105);"><span style="-webkit-tap-highlight-color: transparent; font-size: 16px;"><span style="-webkit-tap-highlight-color: transparent; font-family: arial, helvetica, sans-serif;">Tận hưởng lãi suất không kỳ hạn trên số tiền trong tài khoản</span></span></span><br style="-webkit-tap-highlight-color: transparent;" />'
														+ '&nbsp;</li>'
													+ '<li style="-webkit-tap-highlight-color: transparent; line-height: 20px; text-align: justify;"><span style="-webkit-tap-highlight-color: transparent; color: rgb(105, 105, 105);"><span style="-webkit-tap-highlight-color: transparent; font-size: 16px;"><span style="-webkit-tap-highlight-color: transparent; font-family: arial, helvetica, sans-serif;">Chuyển khoản, thanh toán hóa đơn, nạp tiền điện thoại dễ dàng qua</span></span></span><br style="-webkit-tap-highlight-color: transparent;" />'
														+ '&nbsp;</li>'
													+ '<li style="-webkit-tap-highlight-color: transparent; line-height: 20px; text-align: justify;"><span style="-webkit-tap-highlight-color: transparent; color: rgb(105, 105, 105);"><span style="-webkit-tap-highlight-color: transparent; font-size: 16px;"><span style="-webkit-tap-highlight-color: transparent; font-family: arial, helvetica, sans-serif;">Internet Banking, Mobile Banking</span></span></span></li>'
													+ '</ul>'
												+ '</div>'
												+ '</div>'
					
												+ '<p>&nbsp;</p>'
					
												+ '<div class="w_90per clearfix" style="background-color:rgb(239, 239, 239)">'
												+ '<div class="alginL col-lg-6 col-md-6 col-sm-6 col-xs-12">'
												+ '<div class="col-xs-12"><img alt="" class="img-responsive center-block img_full" src="https://card.vietcapitalbank.com.vn/userfiles/images/Han-muc-su-dung_The-ghi-no(1).png" style="width: 575px; height: 306px;" /></div>'
												+ '<br />'
												+ '&nbsp;</div>'
					
												+ '<div class="alginR textR col-lg-6 col-md-6 col-sm-6 col-xs-12">'
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><span style="font-weight: 700;">Hạn mức sử dụng và biểu phí</span></span></span></span></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><span style="font-weight: 700;">Hạn mức sử dụng:</span></span></span></span></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">Số tiền rút tối đa/ngày: 50 triệu</span></span></span></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">Số tiền chuyển khoản tối đa/ngày: 50 triệu</span></span></span></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">Hạn mức thanh toán tối đa/ngày: 100 triệu</span></span></span></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><br />'
												+ '<a href="/userfiles/files/hanmuc.pdf" target="_blank"><span style="color: rgb(0, 0, 205);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><em>Chi tiết</em></span></span></span></a></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><span style="font-weight: 700;">Biểu phí</span><em>:</em></span></span></span></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;"><br />'
												+ '<a href="/userfiles/files/Bieu%20Phi%20the%20E-Plus_1_1_2016.pdf" target="_blank"><span style="color: rgb(0, 0, 255);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><em>Chi tiết</em></span></span></span></a></p>'
					
												+ '<p style="margin-left:.25in">&nbsp;</p>'
												+ '</div>'
												+ '</div>'
					
												+ '<div class="w_90per clearfix">'
												+ '<div class="alginR col-lg-6 col-md-6 col-sm-6 col-xs-12">'
												+ '<div class="col-xs-12"><img alt="" class="img-responsive center-block img_full" src="https://card.vietcapitalbank.com.vn/userfiles/images/Cach-thuc-va-dieu-kien-dang-ky-2(8).png" /></div>'
												+ '<br />'
												+ '&nbsp;</div>'
					
												+ '<div class="alginL textL col-lg-6 col-md-6 col-sm-6 col-xs-12">'
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><span style="font-weight: 700;">Các thức &amp; Điều kiện đăng ký</span></span></span></span></p>'
					
												+ '<p style="margin-left: 0.25in; line-height: 20.8px; text-align: justify;">&nbsp;</p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">Bước 1: Mở tài khoản thanh toán tại Viet Capital Bank</span></span></span></p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">Bước 2: Đến bất cứ Chi nhánh/Phòng giao dịch của Viet Capital Bank<br />'
												+ '<br />'
												+ 'để yêu&nbsp;</span></span></span><span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">cầu mở thẻ ghi nợ nội địa Viet Capital E-Plus</span></span></span></p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;">&nbsp;</p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><span style="font-weight: 700;">Điều kiện đăng ký</span></span></span></span></p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><em>Thẻ chính:</em>&nbsp;từ 18 tuổi trở lên</span></span></span></p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><em>Thẻ phụ:</em>&nbsp;từ 15 tuổi trở lên</span></span></span></p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;">&nbsp;</p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><span style="font-weight: 700;">Hồ sơ đăng ký:</span></span></span></span></p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">1.</span></span></span><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;"><a href="/userfiles/files/001_Giay%20de%20nghi%20kiem%20hop%20dong%20su%20dung%20The%20Viet%20Capital-E-Plus.pdf" target="_blank"><span style="color: rgb(0, 0, 255);">&nbsp;Giấy đề nghị kiêm hợp đồng sử dụng Thẻ ghi nợ nội địa<em>&nbsp;(tại đây)</em></span></a></span></span></p>'
					
												+ '<p style="margin-left: 40px; line-height: 20.8px; text-align: justify;"><br />'
												+ '<span style="color: rgb(105, 105, 105);"><span style="font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif;">2. Bản sao CMND/Hộ chiếu</span></span></span></p>'
												+ '</div>'
					
												+ '<p>&nbsp;</p>'
												+ '</div>'
							},
							{
								title : "Template for Biểu Phí - Responsive",
								image : "",
								description : "Using for two cols - responsive",
								html : '<div class="w_90per clearfix">'
									+ '<div class="alginR col-lg-6 col-md-6 col-sm-6 col-xs-12">'
									+ '<div class="col-xs-12"><img alt="" class="img-responsive center-block img_211" src="https://card.vietcapitalbank.com.vn/userfiles/images/The-Visa-Platinum-3D.png" style="text-align: center;" /></div>'
			
									+ '<p style="text-align: center;"><br />'
									+ '&nbsp;</p>'
									+ '</div>'
			
									+ '<div class="alginL textL col-lg-6 col-md-6 col-sm-6 col-xs-12">'
									+ '<h2 style="text-align: center;"><span style="color:#c39a6b"><span style="font-size:20px">Biểu Phí</span></span></h2>'
			
									+ '<div class="clearfix">'
									+ '<p style="text-align: center;"><br />'
									+ '<span style="font-size:16px"><span style="color:#666666"><strong>►Phí thường niên thẻ chính/phụ</strong>&nbsp;: </span><span style="color:#c39a6b">Không&nbsp;Phí</span></span></p>'
			
									+ '<p style="text-align: center;"><br />'
									+ '<span style="font-size:16px"><span style="color:#666666"><strong>►Phí Phát Hành</strong>: </span><span style="color:#c39a6b">Không&nbsp;Phí</span></span></p>'
			
									+ '<p style="text-align: center;"><br />'
									+ '<span style="font-size:14px"><em><a href="https://card.vietcapitalbank.com.vn/userfiles/files/Bieu%20phi%20the%20tin%20dung%20Visa%20Platinum%282%29.pdf" target="_blank"><span style="color:#c39a6b">C</span></a></em></span><a href="https://card.vietcapitalbank.com.vn/userfiles/files/Bieu%20phi%20the%20tin%20dung%20Visa%20Platinum%282%29.pdf" target="_blank"><span style="color:#c39a6b"><span style="font-size:14px"><em>hi tiết xem thêm tại đây</em></span></span></a></p>'
									+ '</div>'
			
									+ '<p style="text-align: center;"><br />'
									+ '&nbsp;</p>'
									+ '</div>'
									+ '</div>'
							},
							{
								title : "Template for Image Left - Responsive",
								image : "",
								description : "Using for two cols - responsive",
								html : '<div class="w_90per clearfix marginT15">'
										+ '<div class="alginL col-lg-6 col-md-6 col-sm-6 col-xs-12"><img alt="" src="https://card.vietcapitalbank.com.vn/userfiles/images/VienThongA.jpg" /></div>'

										+ '<div class="alginR textR col-lg-6 col-md-6 col-sm-6 col-xs-12">'
										+ '<p><a><span style="font-size:16px"><span style="font-family:verdana,geneva,sans-serif"><span style="color:rgb(105, 105, 105)">Ưu đãi đến 10% khi mua sắm trực tuyến với thẻ tín dụng Viet</span></span></span></a></p>'

										+ '<p><a><span style="font-size:16px"><span style="font-family:verdana,geneva,sans-serif"><span style="color:rgb(105, 105, 105)">Capital Visa tại trang web Viễn Thông A</span></span></span></a></p>'

										+ '<p><a><span style="font-size:16px"><span style="font-family:verdana,geneva,sans-serif"><span style="color:rgb(105, 105, 105)">Thời gian áp dụng: từ ngày <strong>15/08</strong> - <strong>15/11/2016</strong></span></span></span></a></p>'
										+ '</div>'
										+ '</div>'
							},
							{
								title : "Template for Image Right - Responsive",
								image : "",
								description : "Using for two cols - responsive",
								html : '<div class="w_90per clearfix marginT15">'
										+ '<div class="alginR col-lg-6 col-md-6 col-sm-6 col-xs-12"><img alt="" src="https://card.vietcapitalbank.com.vn/userfiles/images/Banner-the%20visa%202(2).jpg" /></div>'

										+ '<div class="alginL textL col-lg-6 col-md-6 col-sm-6 col-xs-12">'
										+ '<p><a><span style="font-family:verdana,geneva,sans-serif"><span style="color:#696969"><span style="font-size:16px">Tặng mã code trị giá <strong>300.000 VND</strong> cho <strong>2 chuyến đi sử dụng ứng dụng Taxi Uber </strong> khi đăng kí phát hành thẻ tín dụng <strong>Viet Capital Visa.</strong></span></span></span></a></p>'

										+ '<p><a><span style="font-family:verdana,geneva,sans-serif"><span style="color:#696969"><span style="font-size:16px">Thời gian áp dụng: từ nay đến <strong>15/10/2016</strong></span></span></span></a></p>'
										+ '</div>'
										+ '</div>'
							},
							{
								title : "Template for Card Credit Detail - Responsive",
								image : "",
								description : "Using for three cols - responsive",
								html :  '<div class="row col_six">'
											+ '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/Mien-phi-thuong-nien(1).jpg" style="height: 60px; width: 60px;" />'
											+ '<p style="text-align: center;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px; color: rgb(105, 105, 105); line-height: 1.6;">Miễn phí thường niên trong suốt thời gian&nbsp;hiệu lực thẻ</span></p>'
											+ '</div>'

											+ '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/Hoan-tien(1).jpg" style="height: 60px; width: 60px;" />'
											+ '<p style="text-align: center;"><span style="font-family: arial, helvetica, sans-serif; font-size: 16px; color: rgb(105, 105, 105); text-align: center; line-height: 1.6;">Nhận 5 VND tiền thưởng cho mỗi 1000 VND chi tiêu&nbsp;</span><span style="font-family: arial, helvetica, sans-serif; font-size: 16px; color: rgb(105, 105, 105); text-align: center; line-height: 1.6;">hoặc 1 dặm bay với mỗi 25.000 VND chi tiêu bằng&nbsp;</span><span style="font-family: arial, helvetica, sans-serif; font-size: 16px; color: rgb(105, 105, 105); text-align: center; line-height: 1.6;">thẻ</span></p>'
											+ '</div>'

											+ '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/Bao-hiem-tai-nan-du-lich.png" style="height: 60px; width: 60px;" />'
											+ '<p style="text-align:center"><a href="https://card.vietcapitalbank.com.vn/userfiles/files/VIETCAPITAL_QUY%20T%E1%BA%AEC%20B%E1%BA%A2O%20HI%E1%BB%82M.pdf" target="_blank"><span style="color:#696969"><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">Bảo hiểm du lịch toàn cầu lên tới 10,5 tỷ VND cho&nbsp;chủ&nbsp;thẻ &amp; người thân</span></span></span> </a></p>'
											+ '</div>'
											
											+ '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/Uu-dai-danh-rieng-cho-chu-the.png" style="height: 60px; width: 60px;" />'
											+ '<p style="text-align: center;"><span style="color:#696969"><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">Tư vấn và hỗ trợ chủ thẻ Visa Platinum khi đi&nbsp;</span></span><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">công tác,&nbsp;du lịch,...&nbsp;bất cứ&nbsp;nơi đâu trên thế giới với&nbsp;dịch vụ hỗ trợ toàn cầu 24/7</span></span></span></p>'
											+ '</div>'

											+ '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/Uu-dai-danh-rieng-cho-chu-the(3).jpg" style="height: 60px; width: 60px;" />'
											+ '<p style="text-align: center;"><span style="color:#696969"><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">Tận hưởng ưu đãi đặc quyền sang trọng bậc nhất&nbsp;tại&nbsp;</span></span><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">Việt Nam&nbsp;</span><span style="background-color:transparent">và trên toàn thế giới</span></span></span></p>'
											+ '</div>'

											+ '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><img alt="" class="img-responsive center-block" src="https://card.vietcapitalbank.com.vn/userfiles/images/Uu-dai-danh-rieng-cho-chu-the(3).jpg" style="height: 60px; width: 60px;" />'
											+ '<p style="text-align: center;"><span style="color:#696969"><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">Tận hưởng ưu đãi đặc quyền sang trọng bậc nhất&nbsp;tại&nbsp;</span></span><span style="font-size:16px"><span style="font-family:arial,helvetica,sans-serif">Việt Nam&nbsp;</span><span style="background-color:transparent">và trên toàn thế giới</span></span></span></p>'

											+ '<p style="text-align: center;">&nbsp;</p>'
											+ '</div>'
										+ '</div>'
							},
							{
								title : "Center Col",
								image : "",
								description : "Using for typing text in the sencond col - responsive",
								html : '<div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-xs-12">Type content for col</div><div class="col-lg-offset-4 col-md-offset-4 hidden-sm hidden-xs"></div><br/>;'
							},
							{
								title : "Image - Responsive And Center",
								image : "",
								description : "Using for inserting image - responsive and center",
								html : '<div class="col-xs-12"><img src=" " alt="" class="img-responsive center-block" style="width: 30px; height: 30px;""/></div><br/>&nbsp;'
							}
							,
							{
								title : "Table - Responsive",
								image : "",
								description : "Using for inserting table - responsive",
								html : '<div class="col-xs-12"><div class="table-responsive"><table border="1" cellpadding="1" cellspacing="1" height="66" width="500"><tbody><tr><td>&nbsp;</td></tr></tbody></table></div></div><br/>&nbsp;'
							}
							/*end*/]
				});