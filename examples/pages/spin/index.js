Page({
    data: {
        spinShow: true,
        switch: false
    },
    onSwitchChange ({ detail }) {
        const value = detail.value;
        this.setData({
            switch1: value,
            spinShow: !value
        });
    }
});
