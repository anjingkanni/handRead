<template>
  <div class="main">
	  <SlideShow
		  :slide-img="slideImgs"
	  />
	  <IndexReco
		  :new-book-list="recoBook"
		  @enterPage="enterPage"
	  />
	  <BookDetailsPage
		  :book-details-info="bookDetails"
		  :is-details="isDetails"
		  @hiddenPage="hiddenPage"
		  @addOneBook="addOneBook"
		  :bookCount="bookCount"
		  @subtractOneBook="subtractOneBook"
		  @addToCart="addToCart"
	  />
  </div>
</template>

<script src="../scripts/main-container.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.main {
		position: relative;
		margin: 0;
		padding: 0;
	}
</style>
