export class Loki {

    static save(data: any) {
        localStorage.setItem('token', data)
    }

    static check() {
        let data = localStorage.getItem(
            'token'
        );
        if (data != null || data != undefined) {
            return true;

        } else {
            return false;
        }
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static remove() {
        return localStorage.removeItem(('token'));
    }

    static save_detail(data: any) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('image', data.image);
        localStorage.setItem('Duration', data.Duration);
        localStorage.setItem('category', data.category);
        localStorage.setItem('rating', data.rating);
        localStorage.setItem('creater', data.creater);
        localStorage.setItem('overview', data.overview);
        localStorage.setItem('episodes', data.episodes);
        localStorage.setItem('trailer1', data.trailer1);
        localStorage.setItem('trailer2', data.trailer2);
        localStorage.setItem('trailer3', data.trailer3);
        localStorage.setItem('Network', data.Network);
        localStorage.setItem('age_rating', data.age_rating);
        localStorage.setItem('weekly_download', data.weekly_download);
        localStorage.setItem('download1Low', data.download1Low);
        localStorage.setItem('download1Lowtext', data.download1Lowtext);
        localStorage.setItem('download1High', data.download1High);
        localStorage.setItem('download1Hightext', data.download1Hightext);


        localStorage.setItem('download2Low', data.download2Low);
        localStorage.setItem('download2Lowtext', data.download2Lowtext);
        localStorage.setItem('download2High', data.download2High);
        localStorage.setItem('download2Hightext', data.download2Hightext);


        localStorage.setItem('download3Low', data.download3Low);
        localStorage.setItem('download3Lowtext', data.download3Lowtext);
        localStorage.setItem('download3High', data.download3High);
        localStorage.setItem('download3Hightext', data.download3Hightext);


        localStorage.setItem('download4Low', data.download4Low);
        localStorage.setItem('download4Lowtext', data.download4Lowtext);
        localStorage.setItem('download4High', data.download4High);
        localStorage.setItem('download4Hightext', data.download4Hightext);


        localStorage.setItem('download5Low', data.download5Low);
        localStorage.setItem('download5Lowtext', data.download5Lowtext);
        localStorage.setItem('download5High', data.download5High);
        localStorage.setItem('download5Hightext', data.download5Hightext);


        localStorage.setItem('download6Low', data.download6Low);
        localStorage.setItem('download6Lowtext', data.download6Lowtext);
        localStorage.setItem('download6High', data.download6High);
        localStorage.setItem('download6Hightext', data.download6Hightext);


        localStorage.setItem('download7Low', data.download7Low);
        localStorage.setItem('download7Lowtext', data.download7Lowtext);
        localStorage.setItem('download7High', data.download7High);
        localStorage.setItem('download7Hightext', data.download7Hightext);


        localStorage.setItem('download8Low', data.download8Low);
        localStorage.setItem('download8Lowtext', data.download8Lowtext);
        localStorage.setItem('download8High', data.download8High);
        localStorage.setItem('download8Hightext', data.download8Hightext);


        localStorage.setItem('download9Low', data.download9Low);
        localStorage.setItem('download9Lowtext', data.download9Lowtext);
        localStorage.setItem('download9High', data.download9High);
        localStorage.setItem('download9Hightext', data.download9Hightext);


        localStorage.setItem('download10Low', data.download10Low);
        localStorage.setItem('downloal10Lowtext', data.download10Lowtext);
        localStorage.setItem('download10High', data.download10High);
        localStorage.setItem('download10Hightext', data.download10Hightext);

        localStorage.setItem('encoder', data.encoder);
        localStorage.setItem('translator', data.translator);
        localStorage.setItem('uploader', data.uploader);


    }
    static get_name() {
        return localStorage.getItem('name');
    }
    static get_image() {
        return localStorage.getItem('image');
    }
    static get_Duration() {
        return localStorage.getItem('Duration');
    }
    static get_category() {
        return localStorage.getItem('category');
    }
    static get_rating() {
        return localStorage.getItem('rating');
    }
    static get_creater() {
        return localStorage.getItem('creater');
    }
    static get_overview() {
        return localStorage.getItem('overview');
    }
    static get_episodes() {
        return localStorage.getItem('episodes');
    }
    static get_trailer1() {
        return localStorage.getItem('trailer1');
    }
    static get_trailer2() {
        return localStorage.getItem('trailer2');
    }
    static get_trailer3() {
        return localStorage.getItem('trailer3');
    }
    static get_Network() {
        return localStorage.getItem('Network');
    }
    static get_age_rating() {
        return localStorage.getItem('age_rating');
    }
    static get_weekly_download() {
        return localStorage.getItem('weekly_download');
    }
    static get_download1Low() {
        return localStorage.getItem('download1Low');
    }
    static get_download1Lowtext() {
        return localStorage.getItem('download1Lowtext');
    }
    static get_download1High() {
        return localStorage.getItem('download1High');
    }
    static get_download1Hightext() {
        return localStorage.getItem('download1Hightext');
    }

    static get_download2Low() {
        return localStorage.getItem('download2Low');
    }
    static get_download2Lowtext() {
        return localStorage.getItem('download2Lowtext');
    }
    static get_download2High() {
        return localStorage.getItem('download2High');
    }
    static get_download2Hightext() {
        return localStorage.getItem('download2Hightext');
    }

    static get_download3Low() {
        return localStorage.getItem('download3Low');
    }
    static get_download3Lowtext() {
        return localStorage.getItem('download3Lowtext');
    }
    static get_download3High() {
        return localStorage.getItem('download3High');
    }
    static get_download3Hightext() {
        return localStorage.getItem('download3Hightext');


    } static get_download4Low() {
        return localStorage.getItem('download4Low');
    }
    static get_download4Lowtext() {
        return localStorage.getItem('download4Lowtext');
    }
    static get_download4High() {
        return localStorage.getItem('download4High');
    }
    static get_download4Hightext() {
        return localStorage.getItem('download4Hightext');
    }
    static get_download5Low() {
        return localStorage.getItem('download5Low');
    }
    static get_download5Lowtext() {
        return localStorage.getItem('download5Lowtext');
    }
    static get_download5High() {
        return localStorage.getItem('download5High');
    }
    static get_download5Hightext() {
        return localStorage.getItem('download5Hightext');
    }
    static get_download6Low() {
        return localStorage.getItem('download6low');
    }
    static get_download6Lowtext() {
        return localStorage.getItem('download6Lowtext');
    }
    static get_download6High() {
        return localStorage.getItem('download6High');
    }
    static get_download6Hightext() {
        return localStorage.getItem('download6Hightext');
    }
    static get_download7Low() {
        return localStorage.getItem('download7Low');
    }
    static get_download7Lowtext() {
        return localStorage.getItem('download7Lowtext');
    }
    static get_download7High() {
        return localStorage.getItem('download7High');
    }
    static get_download7Hightext() {
        return localStorage.getItem('download7Hightext');
    }
    static get_download8Low() {
        return localStorage.getItem('download8Low');
    }
    static get_download8Lowtext() {
        return localStorage.getItem('download8Lowtext');
    }
    static get_download8High() {
        return localStorage.getItem('download8High');
    }
    static get_download8Hightext() {
        return localStorage.getItem('download8Hightext');
    }
    static get_download9Low() {
        return localStorage.getItem('download9Low');
    }
    static get_download9Lowtext() {
        return localStorage.getItem('download9Lowtext');
    }
    static get_download9High() {
        return localStorage.getItem('download9High');
    }
    static get_download9Hightext() {
        return localStorage.getItem('download9Hightext');
    }
    static get_download10Low() {
        return localStorage.getItem('download10Low');
    }
    static get_download10Lowtext() {
        return localStorage.getItem('download10Lowtext');
    }
    static get_download10High() {
        return localStorage.getItem('download10High');
    }
    static get_download10Hightext() {
        return localStorage.getItem('download10Hightext');
    }

    static get_translator() {
        return localStorage.getItem('translator');
    }
    static get_encoder() {
        return localStorage.getItem('encoder');
    }
    static get_uploader() {
        return localStorage.getItem('uploader');
    }
    
}