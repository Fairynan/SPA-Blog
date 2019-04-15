<template>
	<div>
		<pdf
			v-for="i in numPages"
			:key="i"
			:src="src"
			:page="i"
			style="display: inline-block; width: 25%"
		></pdf>
	</div>
</template>

<script>

import pdf from 'vue-pdf'

var loadingTask = pdf.createLoadingTask('http://nos.netease.com/edu-lesson-pdfsrc/BC34D8D95BB3052BE18AD739557E8902-1399859177228?Signature=%2FiquUbnPX94hEJCClF00ll%2FbeQZ2iO8hFeNOn2sZPNQ%3D&Expires=1555054647&NOSAccessKeyId=7ba71f968e4340f1ab476ecb300190fa&download=1+%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%92%8C%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80.pdf');

export default {
	components: {
		pdf
	},
	data() {
		return {
			src: loadingTask,
			numPages: undefined,
		}
	},
	mounted() {

		this.src.then(pdf => {

			this.numPages = pdf.numPages;
		});
	}
}

</script>