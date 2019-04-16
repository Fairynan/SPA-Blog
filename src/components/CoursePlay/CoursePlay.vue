<template>
  <div @mousemove="mouseMove">
    <div>
      <span>课件</span>
      <span>></span>
      <el-select v-model="parentKey">
        <el-option
          v-for="item in initData"
          :key="item.key"
          :label="item.label"
          :value="item.key">
        </el-option>
      </el-select>
      <span>></span>
      <el-select v-model="childKey">
        <el-option
          v-for="item in childData"
          :key="item.key"
          :label="item.label"
          :value="item.key"
          pleaceholder="请选择课时">
        </el-option>
      </el-select>
    </div>
    <div>
      <el-row>
        <div v-for="item of childOperation" :key="item.label" @click="changeCurrentPlay(item)">
          <el-col :span="parseInt(24 / childOperation.length)">
            <el-tooltip
              effect="dark"
              :content="item.label">
              <i v-if="item.type === 'video'" class="el-icon-view"></i>
              <i v-else-if="item.type === 'markdown'" class="el-icon-tickets"></i>
              <i v-else-if="item.type === 'pdf'" class="el-icon-document"></i>
            </el-tooltip>
          </el-col>
        </div>
      </el-row>
    </div>
    <div style="color: red">{{parseCountTime}}</div>
    <div>
      <video v-if="currentPlay.type === 'video'" :src="currentPlay.href" width="100%" controls autoplay/>
      <div v-else-if="currentPlay.type === 'markdown'" v-html="currentPlay.content"></div>
      <div v-else-if="currentPlay.type === 'pdf'"><pdf :src="src"></pdf></div>
    </div>
  </div>
</template>

<script>
import {courseDetails,courseMarkdownList} from '../../constant'
import pdf from 'vue-pdf'
import marked from 'marked'
import Prism from 'prismjs'
import { getArticle } from '../../api'
marked.setOptions({
  highlight: (code) => Prism.highlight(code, Prism.languages.javascript)
})
export default {
  components: {
    pdf
  },
  data() {
    return {
      initData: [],
      parentKey: 0,
      childKey: 0,
      currentPlay: '',
      src: '',
      numPages: '',
      countTimeId: '',
      countTime: 0,
      videoMax: 20,
      markdownMax: 5,
      pdfMax: 10,
      currentCountTime: 0 //当前累计未监听到事件时长
    }
  },
  created() {
    const {courseId, parentKey, childKey} = this.$route.query
    this.initData = courseDetails[courseId]
    this.parentKey = parentKey
    this.childKey = childKey
    this.currentPlay = this.childOperation[0]
    console.log(this.currentPlay,111111)
    this.startInterval()
  },
  destroyed() {
    clearInterval(this.countTimeId)
  },
  computed: {
    childData() {
      return this.initData && this.initData.find(item => item.key === this.parentKey).children
    },
    childOperation() {
      const child = this.childData && this.childData.find(item => item.key === this.childKey)
      return child && child.operations
    },
    parseCountTime() {
      const second = parseInt(this.countTime % 60)
      const minute = parseInt(this.countTime / 60 % 60)
      const hour = parseInt(this.countTime / 3600)
      return `您已经学习了${hour}小时${minute}分${second}秒`
    }
  },
  methods: {
    startInterval() {
      this.countTimeId = setInterval(() => {
        this.countTime += 1
        this.currentCountTime += 1
        switch(this.currentPlay.type) {
          case 'video':
            if(this.currentCountTime > this.videoMax) {
              this.alertWaning()
            }
            break
          case 'markdown':
            if(this.currentCountTime > this.markdownMax) {
              this.alertWaning()
            }
            break
          case 'pdf':
            if(this.currentCountTime > this.pdfMax) {
              this.alertWaning()
            }
            break
          default:
            break
        }
      }, 1000);
    },
    mouseMove() {
      this.currentCountTime = 0
    },
    alertWaning(content = '您是否正在学习？', title = '提示') {
      clearInterval(this.countTimeId)
      this.$alert(content, title, {
        confirmButtonText: '确定',
        callback: () => {
          this.currentCountTime = 0
          this.startInterval()
        }
      })
    },
    changeCurrentPlay(item) {
      this.currentPlay = item
      if(this.currentPlay.type === 'markdown') {
        this.currentPlay.content = courseMarkdownList[this.currentPlay.id].content
        marked(this.currentPlay.content, (err, content) => {
          if (!err) {
            this.currentPlay.content = content
          }
        })
      } else if(this.currentPlay.type === 'pdf') {
        this.src = pdf.createLoadingTask("http://nos.netease.com/edu-lesson-pdfsrc/BC34D8D95BB3052BE18AD739557E8902-1399859177228?Signature=%2FiquUbnPX94hEJCClF00ll%2FbeQZ2iO8hFeNOn2sZPNQ%3D&Expires=1555054647&NOSAccessKeyId=7ba71f968e4340f1ab476ecb300190fa&download=1+%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%92%8C%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80.pdf")
        console.log(this.src)
      }
    }
  }
}
</script>

<style>

</style>
