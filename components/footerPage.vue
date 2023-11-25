<template>

    <div class="footer-section">
    <div class="footer">
		
	<div class="container">
		 <!-- <div class="footer-bottom"> -->
		<v-row class="fter">
	<div class="col-md-3 footer-one">
			<!-- <h5><a href="#about">A Propos de Nous </h5> -->
	
		<div class="social-icons"> 
		<a href="#"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
		<a href="#"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
		<a href="mailto:info@upnch.univ.ht"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
	    </div>	
		</div>
		<div class="col-md-3 footer-one">
			<h5><a href="/">Accueil</a> </h5>		    	
		</div>
		<div class="col-md-3 footer-two">
		    <h5><a href="#about">A Propos de Nous</a> </h5>		   
		</div>
		<div class="col-md-3 footer-three">
		    <h5><a href="#contact">Contact</a></h5>
		   
		</div>
		
		</v-row>
		 
		<div class="clearfix"></div>
	</div>
</div>
    <div class="footer-bottom">
        <div class="container">
					<div class="row">
						<div class="col-sm-12 text-center ">
							<div class="copyright-text">
								<p>CopyRight © {{ new Date().getFullYear() }} Design by EDROMEDIA</p>
							</div>
						</div> <!-- End Col -->
						
					</div>
				</div>
    </div>
</div>  

</template>
<style scoped>
/* Footer */
.fter{
	margin-top: 20px;
	margin-bottom: 0px;
}
.footer {
    position: relative;
    background-color: #F5F6FA;
    color: #011034;
	width: 100%;
    padding: 0;
	margin: 0;
	margin-bottom: 5px;
}
.footer h5 {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    color: #011034;
    position: relative;
    padding-bottom: 6px;
}
.footer h5:after {
    content: '';
    display: block;
    margin: 5px 0 0;
    width: 40%;
    height: 1px;
    background-color: #F5F6FA;
}
.footer ul {
    list-style: none;
    line-height: 2.2em;
    padding-left:0px;
}
.footer ul a {
    color:#011034;
    /* color:#707070;; */
}
.footer ul a:hover {
    color:#011034;
    text-decoration:none;
}
/*footer bottom */
.footer-bottom {
    padding-top: 5px;
    padding-bottom: 5px;
    border-top: 1px solid rgba(0,0,0,0.09);
    background: #F5F6FA;
	 margin-top: 2px;
    
}
.copyright-text p {
    color: #011034;   
    margin-bottom: 0;
    font-size:12px;
}


</style>