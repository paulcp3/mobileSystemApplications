import $ from 'jquery'

export default {
    data() {
        return {
            H66: '',
            H137: '',
            H160: ''
        }

    },
    methods: {
        setHeight() {
            let bdHeight = $('body').height()
            this.H66 = bdHeight - 66
            this.H137 = bdHeight - 137
            this.H160 = bdHeight - 110
        },
        userType(val) {
            if (val == 'tour') {
                return '../../static/201711152108314044.png'
            } else if (val == 'admin') {
                return '../../static/201711152055275320.png'
            } else if (val == 'vip') {
                return '../../static/201711152101104299.png'
            } else {
                return '../../static/201711152131086705.png'
            }
        }
    },
    mounted() {
        let that = this
        that.setHeight()
        $(window).resize(() => that.setHeight())
    },
    filters: {
        FullPath(value) {
            return value
        }
    }
}