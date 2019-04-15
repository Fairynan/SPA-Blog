<template>
  <div>
    <div style="font-size: 16px; font-weight: 500; margin: 20px 0;">课件</div>
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="item of courseDetails"
        :key="item.key"
        :title="item.label">
        <div v-for="child of item.children" :key="child.key" @click="goVideo(item.key, child.key)">
          <el-row>
            <el-col :span="12">{{child.label}}</el-col>
            <el-col :span="12">
              <div @click="playVideo(item.key,child.key)">
                <el-tooltip
                v-for="(operation, videoIndex) of child.operations"
                :key="videoIndex"
                class="item"
                effect="dark"
                :content="operation.label">
                  <i style="margin: 0 10px" v-if="operation.type === 'video'" class="el-icon-view"></i>
                  <i style="margin: 0 10px" v-else-if="operation.type === 'markdown'" class="el-icon-tickets"></i>
                  <i style="margin: 0 10px" v-else-if="operation.type === 'pdf'" class="el-icon-document"></i>
                </el-tooltip>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
  </el-collapse>
  </div>
</template>

<script>
const courseId = 199001
import {courseDetails} from '../../constant'
export default {
  data() {
    return {
      activeNames: ['1'],
      courseDetails: courseDetails[courseId]
    }
  },
  created() {
    console.log(this.courseDetails,1111111)
  },
  methods: {
    goVideo(itemKey,childKey) {
      console.log("itemKey = " ,itemKey,"childKey = ", childKey )
      this.$router.push({
        path: 'videoPlay',
        query: {
          courseId: courseId,
          parentKey: itemKey,
          childKey: childKey
        }
      })
    },
    playVideo(itemKey,childKey) {
      console.log("itemKey = " ,itemKey,"childKey = ", childKey )
      this.$router.push({
        path: 'videoPlay',
        query: {
          courseId: courseId,
          parentKey: itemKey,
          childKey: childKey
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
