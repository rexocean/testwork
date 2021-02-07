import request from '@/utils/request'

export default {

    //1.讲师列表（条件查询分页）
    // js 不用声明类型
    //current当前页   limit每页记录数  teacherQuery条件对象
    getTeacherListPage(current,limit,teacherQuery){
      return request({
        //url: '/table/list/'+current+"/"+limit,
        url:`/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
        method: 'post',
        // params
        // teacherQuery条件对象,后端使用RequestBody获取数据
        // data表示把对象转换json进行
        data: teacherQuery
      })
    },

    //删除讲师
    deleteTeacherId(id){
      return request({
        url:`/eduservice/teacher/${id}`,
        method: 'delete'
      })
    },
    
    //添加讲师
    addTeacher(teacher){
      return request({
        url:`/eduservice/teacher/addTeacher`,
        method: 'post',
        data: teacher
      })
    },
    //根据id查询讲师
    getTeacherInfo(id){
      return request({
        url:`/eduservice/teacher/getTeacher/${id}`,
        method: 'get',
      })
    },
    //修改讲师teacher
    updateTeacherInfo(teacher) {
      return request({
        url:`/eduservice/teacher/updateTeacher`,
        method: 'post',
        data: teacher
      })
    }

}