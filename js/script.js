const tb=document.querySelectorAll('#main_content4>.container1>.imgs>ul>li>a>p>span');
    tb.forEach((tb)=>{
        const t=tb.innerHTML;
        let outputText=t;
        //console.log(t);
        if(t.length>16){
            outputText=t.substr(0,16)+"...";
        }
        tb.innerHTML=outputText;
    })
    const textBox=document.querySelectorAll('#main_content1>.container1>ul>li>a>p>span');
    textBox.forEach((textBox)=>{
        const txt=textBox.innerHTML;
        let outputText=txt;
        //console.log(txt);
        if(txt.length>13){
            outputText=txt.substr(0,13)+"...";
        }
        textBox.innerHTML=outputText;
    })
    const txtBox=document.querySelectorAll('#main_content2>.container1>ul>li>a>span');
    txtBox.forEach((txtBox)=>{
        const text=txtBox.innerHTML;
        let outputText=text;
        //console.log(text);
        if(text.length>7){
            outputText=text.substr(0,7)+"...";
        }
        txtBox.innerHTML=outputText;
    })
    const tabContents = {
            tab1: {
                images: ['imgs/main/tb_1.jpg', 'imgs/main/tb_2.jpg', 'imgs/main/tb_3.jpg', 'imgs/main/tb_4.jpg'],
                title: '당신이 보지 못한 희귀 사진',
                paragraphs: [
                    '사진으로 복원된 우리 근대사',
                    '타이완 출신 쉬충마오 선생이 수집한 조선과 일제강점기 희귀 사진 390여 장. 많은 자료를 비교해 컬러로 복원된 국내 최초 공개되는 희귀 사진으로, 당시 시대상과 문화를 볼 수 있는 소중한 사료이다. 근대사의 여정에서 우리 민족이 겪은 기쁨과 슬픔 역시 생생하게 복원되어 우리에게 다가온다.',
                    '쉬충마오 편 | 서해문집'
                ]
            },
            tab2: {
                images: ['imgs/main/tb_2.jpg', 'imgs/main/tb_3.jpg', 'imgs/main/tb_4.jpg', 'imgs/main/tb_1.jpg'],
                title: '마라닉 페이스',
                paragraphs: [
                    '일단, 달려보세요!',
                    '구독자 수 16만 <마라닉 TV> 운영자 해피러너 올레 이재진의 첫 책. 변화를 마주하는 시점에 만난 달리기로 달라진 삶의 여정을 재미있게 들려준다. 속도의 강박을 버리고 나에게 맞는 즐거운 달리기를 권하는 저자는 머뭇거리는 이들에게 오늘도 말한다. 일단, 달려보세요!',
                    '이재진 저 | 푸른숲'
                ]
            },
            tab3: {
                images: ['imgs/main/tb_3.jpg', 'imgs/main/tb_4.jpg', 'imgs/main/tb_1.jpg', 'imgs/main/tb_2.jpg'],
                title: '마녀와의 7일',
                paragraphs: [
                    '히가시노 게이고의 100번째 작품',
                    '발표하자마자 압도적인 걸작이란 호평을 거머쥔 히가시노 게이고의 신작이자 5년 만에 선보이는 〈라플라스 시리즈〉 세 번째 작품. 경찰 추리 서사로 시작해, 소년 성장과 SF 세계로 이어지면서 게이고표 소설의 정점을 보여준다. 미스터리를 통해 AI와 인간의 공존 가능성을 모색하는 소설.',
                    '히가시노 게이고 저 / 양윤옥 역 | 현대문학'
                ]
            },
            tab4: {
                images: ['imgs/main/tb_4.jpg', 'imgs/main/tb_1.jpg', 'imgs/main/tb_2.jpg', 'imgs/main/tb_3.jpg'],
                title: '서로에게 들려주는 따뜻한 말',
                paragraphs: [
                    '같은 말도 서로에게 더 다정하게',
                    '예쁜 말에는 삶의 순간을 아름답게 바라볼 수 있는 힘이 담겨있어요. 그리고 서로에게 들려주는 따뜻한 말로 더 가까워지기도 합니다. 이 책은 말에 담긴 다정한 마음을 자기 것으로 만들고, 주변 사람들에게 따뜻한 말을 건네며 서로의 관계를 가꾸는 힘을 키워줍니다.',
                    '김종원 글 / 나래 그림 | 상상아이(상상아카데미)'
                ]
            }
        };
        function changeTab(tabId) {
            const content = tabContents[tabId];
            const contentDiv = document.querySelector('.content');
            const images = contentDiv.querySelectorAll('img');
            const title = contentDiv.querySelector('h3');
            const paragraphs = contentDiv.querySelectorAll('p');
            // 이미지 src 변경
            images.forEach((img, index) => {
                img.src = content.images[index];
            });
            // 제목 변경
            title.textContent = content.title;
            // 문단 내용 변경
            paragraphs.forEach((p, index) => {
                p.textContent = content.paragraphs[index];
            });
        }
        const classAdd=(Object)=>{
            const img=document.querySelectorAll('.tab');
            img.forEach((add)=>{
                add.classList.remove('on');
            })
            Object.classList.add('on');
        }
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    changeTab(e.target.id);
                    classAdd(e.target);
                });
            });
            // 초기 탭 설정 (첫 번째 탭)
            changeTab('tab1');
        })
        

    
        
        const aTag=document.querySelectorAll('a');
        aTag.forEach((a)=>{
            a.addEventListener('click', function(event){
                event.preventDefault();
            })
        })
        
        
        const topBtn=document.querySelector('.topBtn>a')
        topBtn.addEventListener('click',function(event){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            });
        })
        const logo=document.querySelector('.header_main>.section>h1');
        logo.addEventListener('click',function(event){
            window.scrollTo({
                top:0
            })
            window.location.reload();
        })
        const fLogo=document.querySelector('.footerLogo1');
        fLogo.addEventListener('click',function(event){
            window.scrollTo({
                top:0
            })
            window.location.reload();
        })

        const Contents = {
            t1: {
                images: ['imgs/banner/yesnow_1.jpg','imgs/banner/yesnow_2.jpg','imgs/banner/yesnow_3.jpg','imgs/banner/yesnow_4.jpg'],
            bullet:['6월의 굿즈 : 유리잔 & 우양산','신규회원 혜택모음','#왓츠인마이책장 챌린지','여행의 이유 5행시 콘테스트'],
            },
            t2: {
                images: ['imgs/banner/kb_1.jpg','imgs/banner/kb_2.jpg','imgs/banner/kb_3.jpg','imgs/banner/kb_4.jpg'],
            bullet:['그래제본소','김사원 세끼','인문교양 추천 도서','아울북 브랜드전'],
            },
            t3: {
                images: ['imgs/banner/gb_1.jpg','imgs/banner/gb_2.jpg','imgs/banner/gb_3.jpg','imgs/banner/gb_4.jpg'],
            bullet:['애니메이션 관련서','넷플릭스 원작 원서','소장용 원서','그림책 균일가전'],
            },
            t4: {
                images: ['imgs/banner/jg_1.jpg','imgs/banner/jg_2.jpg','imgs/banner/jg_3.jpg','imgs/banner/jg_4.jpg'],
            bullet:['편의점 택배','1천원 균일가','중고샵 할인혜택','매장 배송 중고'],
            },
            t5: {
                images: ['imgs/banner/eb_1.jpg','imgs/banner/eb_2.jpg','imgs/banner/eb_5.jpg','imgs/banner/eb_6.jpg'],
            bullet:['EBS 7월호 출간','프롬텐 신작','21세기 북스 브랜드전','블랑 신작 & `추천작`테마'],
            },
            t6: {
                images: ['imgs/banner/cc_1.jpg','imgs/banner/cc_2.jpg','imgs/banner/cc_3.jpg','imgs/banner/cc_4.jpg'],
            bullet:['서울국제도서전','크레마클럽 최초 공개',`4단계 톱다운 투자법`,'인공지능의 현재와 미래'],
            },
            t7: {
                images: ['imgs/banner/cd_1.jpg','imgs/banner/cd_2.jpg','imgs/banner/cd_3.jpg','imgs/banner/cd_4.jpg'],
            bullet:['김형중 1~3집 LP','엔하이픈 트건','2024 내한 아티스트','SM 공식응원봉'],
            },
            t8: {
                images: ['imgs/banner/dd_1.jpg','imgs/banner/dd_2.jpg','imgs/banner/dd_3.jpg','imgs/banner/dd_4.jpg'],
            bullet:['슬램덩크 UFE','주술회전0','스틸북샵','원데이 특가'],
            },
            t9: {
                images: ['imgs/banner/mg_1.jpg','imgs/banner/mg_2.jpg','imgs/banner/mg_3.jpg','imgs/banner/mg_4.jpg'],
            bullet:['예스24단독','사은품증정','중고게임매입','예스24단독'],
            },
            t10: {
                images: ['imgs/banner/tc_1.jpg','imgs/banner/tc_2.jpg','imgs/banner/tc_3.jpg','imgs/banner/tc_4.jpg'],
            bullet:['청년문화예술패스','이찬원 전국투어','펜타포트 락 페스티벌','하데스타운'],
            }
        };
        
        
        function changeTab1(tId) {
            const content = Contents[tId];
            const contentDiv = document.querySelector('.swiper-slide');
            const im = contentDiv.querySelectorAll('img');
            const pagination=document.querySelector('.pagination').querySelectorAll('li');
            
            // 이미지 src 변경
            im.forEach((img, index) => {
                img.src = content.images[index];
            });
            
            pagination.forEach((p, index) => {
                p.textContent = content.bullet[index];
            });
            
        }
        
        
        // 이벤트 리스너 등록
        document.addEventListener('DOMContentLoaded', (event) => {
            const tabs = document.querySelectorAll('.list>ul>li>a');
            const bgOn=(Object)=>{
                const cA=document.querySelectorAll('#main_banner>.list>ul>li>a');
                cA.forEach((event)=>{
                    event.classList.remove('on');
                })
                Object.classList.add('on');
            }
            tabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    changeTab1(e.target.id);
                    bgOn(e.target);
                });
                
            });
        
            // 초기 탭 설정 (첫 번째 탭)
            changeTab1('t1');
        });
        
    let visibleIndex = 0;
    const imgSlideControl=(num)=>{
        visibleIndex+=num;
        if( visibleIndex>3 ){
            visibleIndex = 0;
        }
        if( visibleIndex<0 ){
            visibleIndex = 3;
        }
        const imgs = document.querySelectorAll('.swiper-slide>img');
        imgs.forEach(img=> img.style.display='none');
        imgs[visibleIndex].style.display='block';
        const bbg=document.querySelectorAll('.pagination>li');
        bbg.forEach((e)=>{
            e.classList.remove('on');
        })
        bbg[visibleIndex].classList.add('on');        
    }
    const nextImg=()=>{
        imgSlideControl(1);
        /*
            let list=document.querySelectorAll('.swiper-slide>img');
            let first=list.item(0);
            document.querySelector('.swiper-slide').appendChild(first);
            list.item(1).style.display="block";
        */
    }
    const prevImg=()=>{
        imgSlideControl(-1);
        /*
            let list=document.querySelectorAll('.swiper-slide>img');
            let first=list.item(0);
            let last=list.item(list.length-1);
            document.querySelector('.swiper-slide').insertBefore(last, first);
            last.style.display="block";
        */
    }
    
    document.querySelector('.sbt1').addEventListener('click',nextImg);
    document.querySelector('.sbt2').addEventListener('click',prevImg);
    
    const bullet_bg=(Object)=>{
        const bbg=document.querySelectorAll('.pagination>li');
        bbg.forEach((e)=>{
            e.classList.remove('on');
        })
        Object.classList.add('on');
    }
    const bull_bg=document.querySelectorAll('.pagination>li');
    bull_bg.forEach((e)=>{
        e.addEventListener('click',(event)=>{
            bullet_bg(event.target);
        })
    })
    

    $(function(){
        const Container=$('.swiper-slide');
        const Contain=$('.bannerBox');
        const bc=$('.pagination>li');
        let visiIndex=0;

            const slide_bc=()=>{
                visiIndex++;
                if(visiIndex>3){visiIndex=0;}
                if(visiIndex<0){visiIndex=3;}
            
            let imgs=$(Container).find('img');
            imgs.fadeOut(0,()=>{
                bc.removeClass('on');
            });
            imgs.eq(visiIndex).fadeIn(0,()=>{
                bc.eq(visiIndex).addClass('on');
            })
            //console.log(visiIndex);
            
            
        }

        let timer=setInterval(slide_bc,5000);

        Contain.on('mouseenter',()=>{
            clearInterval(timer);
        });

        Contain.on('mouseleave',()=>{
            timer=setInterval(slide_bc,5000);
        });

        const imgControl=(n)=>{
            const imgs = $('.swiper-slide').find('img');
            imgs.hide();
            imgs.eq(n).show();
        }
        const pagingDefault=(num)=>{
            visiIndex=num;
            const imgs = $('.swiper-slide').find('img');
            imgs.eq(num).show();
            $('.pagination>li').removeClass('on');
            $('.pagination>li').eq(0).addClass('on');
        }

        const pagenations = $('.pagination>li');
        pagenations.on('click', (e)=>{
            //console.log( $(e.currentTarget).index() );
            const idx = $(e.currentTarget).index();
            visiIndex = idx;            
            imgControl(idx);
        });
        

        $('.list>ul>li>a').on('click', function(){ pagingDefault(0); })
    });

    const bCon={
        b1:{
            images:['imgs/main/B_1.jpg','imgs/main/B_2.jpg','imgs/main/B_3.jpg','imgs/main/B_4.jpg','imgs/main/B_5.jpg','imgs/main/B_6.jpg','imgs/main/B_7.jpg','imgs/main/B_8.jpg','imgs/main/B_9.jpg','imgs/main/B_10.jpg'],
            paragraphs:['그의 운명에 대한 아주 개인적인 생각','밥을 지어요','선재 업고 튀어','하루 한장 나의 어휘력을 위한 필사 노트','불변의 법칙','허송세월','ETS토익 정기시험 기출 문제집 1000 Vol.4 RC','ETS 토익 정기시험 기출 문제집 1000 Vol.4 LC','THE MONEY BOOK','나를 소모하지 않는 현명한 태도에 관하여'],
            span:['유시민 저','김혜경 저','이시은 저','유선경 저','모건하우절 저 이수경 역','김훈 저','ETS저','ETS저','토스 저','마티아스 놜케 저 이미욱 역']
        },
        b2:{
            images:['imgs/main/gb_1.jpg','imgs/main/gb_2.jpg','imgs/main/gb_3.jpg','imgs/main/gb_4.jpg','imgs/main/gb_5.jpg','imgs/main/gb_6.jpg','imgs/main/gb_7.jpg','imgs/main/gb_8.jpg','imgs/main/gb_9.jpg','imgs/main/gb_10.jpg'],
            paragraphs:['Disney Pixar Inside Out 2 My Busy Books 디즈니 픽사 인사이드 아웃 2 비지북 피규어 책','Disney Pixar Inside Out 2: The Junior Novelization',`Step into Reading 3 : Riley's New World (Disney/Pixar Inside Out 2)`,'예약도서) 『SAKAMOTO DAYS』コミックカレンダ- 2025 (卓上/特製デザインカ-ド15枚付き)','最强ジャンプ 2024年7月號','Holes : 1999 뉴베리 수상작','Step into Reading 2 : Changes for Riley (Disney/Pixar Inside Out 2)',`Wonder (미국판) : 줄리아 로버츠 주연 영화 '원더' 원작 소설`,'ELLE TAIWAN 엘르 대만판 2024년 7월호 : 이준호 커버 (잡지 + 접지 포스터 1장)','A Little Life 『리틀 라이프』 원서'],
            span:['Phidal Publishing Inc','Tenny Nellson','Random House Disney','편집부','편집부','루이스 쌔커 저','Random House Disney','R. J. 팔라시오 저','','한야 야나기하라 저']
        },
        b3:{
            images:['imgs/main/jb_1.jpg','imgs/main/jb_2.jpg','imgs/main/jb_3.jpg','imgs/main/jb_4.jpg','imgs/main/jb_5.jpg','imgs/main/jb_6.jpg','imgs/main/jb_7.jpg','imgs/main/jb_8.jpg','imgs/main/jb_9.jpg','imgs/main/jb_10.jpg'],
            paragraphs:['나는 메트로폴리탄 미술관의 경비원입니다','이처럼 사소한 것들','사피엔스','모순','언어의 온도','맡겨진 소녀','이기적 유전자 The Selfish Gene','YES24 중고 상품 포장팩 2호 묶음(10장)','마흔에 읽는 쇼펜하우어 (200쇄 기념 확장판)','여름을 한 입 베어 물었더니'],
            span:['패트릭 브링리 저','클레어 키건 저','유발 하라리 저','양귀자 저','이기주 저','클레어 키건 저','리처드 도킨스 저','','강용수 저','이꽃님 저']
        },
        b4:{
            images:['imgs/main/eb_1.jpg','imgs/main/eb_2.jpg','imgs/main/eb_3.jpg','imgs/main/eb_4.jpg','imgs/main/eb_5.jpg','imgs/main/eb_6.jpg','imgs/main/eb_7.jpg','imgs/main/eb_8.jpg','imgs/main/eb_9.jpg','imgs/main/eb_10.jpg'],
            paragraphs:['입이 트이는 영어 2024년 7월호','밥을 지어요','POWER ENGLISH 2024년 7월호','귀가 트이는 영어 2024년 7월호','EASY WRITING 2024년 7월호','EASY ENGLISH 2024년 7월호','괴이한 미스터리 : 저주 편','불변의 법칙','매일성경[개역개정] 2024년 7-8월호(예레미야 26-52장, 시편 105-106편)','초역 부처의 말'],
            span:['이현석 저','김혜경 저','크리스틴 조 저','이현석 저','마스터유진 저','이보영, 남주철 저','김유철, 배명은, 홍지운, 정세호, 한새마 저','모건 하우절 저 이수경 역','성서유니온선교회 편집부 저','코이케 류노스케 저 박재현 역']
        },
        b5:{
            images:['imgs/main/wc_1.jpg','imgs/main/wc_2.jpg','imgs/main/wc_3.jpg','imgs/main/wc_4.jpg','imgs/main/wc_5.jpg','imgs/main/wc_6.jpg','imgs/main/wc_7.jpg','imgs/main/wc_8.jpg','imgs/main/wc_9.jpg','imgs/main/wc_10.jpg'],
            paragraphs:['잔혹한 이혼 (비수위)','우아한 개자식','카를의 주인','지웠다면 다시','가져서는 안되는 너를, 감히','아기가 생겼어요','눈부신 이혼','왈가닥 결혼하다(개정판)','3차 대전','오만한 애착'],
            span:['리키','봄그린','강희자매','한채린','엣세라','이정','유라떼','이서윤','흑왕궁','현아진']
        },
        b6:{
            images:['imgs/main/cl_1.jpg','imgs/main/cl_2.jpg','imgs/main/cl_3.jpg','imgs/main/cl_4.jpg','imgs/main/cl_5.jpg','imgs/main/cl_6.jpg','imgs/main/cl_7.jpg','imgs/main/cl_8.jpg','imgs/main/cl_9.jpg','imgs/main/cl_10.jpg'],
            paragraphs:['엔시티 위시 (NCT WISH) - 싱글앨범 : WISH [WICHU Ver.](스마트앨범)','뉴진스 (NewJeans) - Supernatural [NJ X MURAKAMI Drawstring Bag ver.]','엔시티 위시 (NCT WISH) - 싱글앨범 : Songbird [Letter Ver.]','싸이코드 - DECISION [STAYG ALBUM ver.]','이준호 (2PM) - 2024 이준호 CONCERT [다시 만나는 날][Blu-ray]','이준호 (2PM) - 2024 이준호 CONCERT [다시 만나는 날][DVD]','악뮤 (AKMU) - Anthology [10인치 투명 컬러 바이닐]','엔시티 위시 (NCT WISH) - 싱글앨범 : Songbird [SMini Ver.](스마트앨범) [6종 중 1종 랜덤발송]','뷔 (V) - TYPE 1','스트레이 키즈 (Stray Kids) - ATE [ATE Ver.]'],
            span:['엔시티 위시 Kakao Entertainment','뉴진스 YGPLUS','엔시티 위시 Kakao Entertainment','싸이코드 지니(genie)뮤직','이준호 에프에프컴퍼니','이준호 에프에프컴퍼니','악뮤 제작소 화수분','엔시티 위시 Kakao Entertainment','뷔 코팬글로벌','스트레이 키즈 드림어스컴퍼니']
        },
        b7:{
            images:['imgs/main/db_1.jpg','imgs/main/db_2.jpg','imgs/main/db_3.jpg','imgs/main/db_4.jpg','imgs/main/db_5.jpg','imgs/main/db_6.jpg','imgs/main/db_7.jpg','imgs/main/db_8.jpg','imgs/main/db_9.jpg','imgs/main/db_10.jpg'],
            paragraphs:['이준호 (2PM) - 2024 이준호 CONCERT [다시 만나는 날][Blu-ray]','이준호 (2PM) - 2024 이준호 CONCERT [다시 만나는 날][DVD]','스파이더맨 : 파 프롬 홈 (3Disc, 4K UHD+3D+BD 렌티큘러 풀슬립 B2 스틸북 넘버링 한정판) : 블루레이','트와이스 (TWICE) - 5TH WORLD TOUR [READY TO BE] IN SEOUL [Blu-ray]','스파이더맨 : 파 프롬 홈 (3Disc, 4K UHD+3D+BD 렌티큘러 풀슬립 B1 스틸북 넘버링 한정판) : 블루레이','스파이더맨 : 파 프롬 홈 (3Disc, 4K UHD+3D+BD 풀슬립 A1 스틸북 넘버링 한정판) : 블루레이','스파이더맨 : 파 프롬 홈 (12Disc, 4K UHD+3D+BD 원 클릭 박스세트 스틸북 한정판) : 블루레이','스파이더맨 : 파 프롬 홈 (3Disc, 4K UHD+3D+BD 풀슬립 A2 스틸북 넘버링 한정판) : 블루레이','트와이스 (TWICE) - 5TH WORLD TOUR [READY TO BE] IN SEOUL [DVD]','2001 스페이스 오디세이 (3Disc, 4K UHD 스틸북 한정수량) : 블루레이'],
            span:['이준호 에프에프컴퍼니','이준호 에프에프컴퍼니','소니 픽쳐스','트와이스 에프에프컴퍼니','소니 픽쳐스','소니 픽쳐스','소니 픽쳐스','소니 픽쳐스','트와이스 에프에프컴퍼니','위너브러더스']
        },
        b8:{
            images:['imgs/main/mg_1.jpg','imgs/main/mg_2.jpg','imgs/main/mg_3.jpg','imgs/main/mg_4.jpg','imgs/main/mg_5.jpg','imgs/main/mg_6.jpg','imgs/main/mg_7.jpg','imgs/main/mg_8.jpg','imgs/main/mg_9.jpg','imgs/main/mg_10.jpg'],
            paragraphs:['[예스24배송] 엘리트 스프링 유선노트','★기간특가★[예스24배송] 노르잇 투명독서대 높이조절 PR01A','[예스24배송] ZEBRA 사라사 클립 중성펜 0.5mm SARASA CLIP','[예스24배송] e-미래샤프(수능샤프) 색상랜덤배송','[예스24배송] 인덱스 마그네틱 북마크','[예스24배송] 귀여운 의자 테이블 휴대폰 마카롱 접이식 거치대','[예스24배송] 핑크풋1000 보리야누나야 공부비법 코넬노트 (랜덤발송)','[예스24배송] 댕댕이 귀여운 캐릭터 양말 10color [인싸 여성 여자 단목 커플 컬러 자수 학생 삭스 동물양말]','[예스24배송] 비팬시 수학 연습장 2등분 4등분 (스프링 필기 노트 공책 무지 오답)','[예스24배송] 행운의 생화 네잎클로버 코팅 카드 책갈피 선물 압화 - 기본형'],
            span:['YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품','YES24발송 GIFT상품']
        },
        b9:{
            images:['imgs/main/tc_1.jpg','imgs/main/tc_2.jpg','imgs/main/tc_3.jpg','imgs/main/tc_4.jpg','imgs/main/tc_5.jpg','imgs/main/tc_6.jpg','imgs/main/tc_7.jpg','imgs/main/tc_8.jpg','imgs/main/tc_9.jpg','imgs/main/tc_10.jpg'],
            paragraphs:['뮤지컬 [등등곡]','뮤지컬 [이블데드]','2024 나이트레이스 인 부산','이토 준지 호러하우스','뮤지컬 [하데스타운] 한국 공연','연극 〈빵야〉','송승환의 가족뮤지컬 [정글북]','연극 〈일리아드〉','Xdinary Heroes Concert〈Closed ♭eta: v6.2〉','뮤지컬 〈에밀〉'],
            span:['2024.06.11 ~ 2024.08.11 / 대학로 TOM 1관','2024.06.20 ~ 2024.09.01 / 인터파크 유니플렉스 1관','2024.08.03 ~ 2024.08.03 / 광안리해수욕장','2024.06.15 ~ 2024.09.08 / DUEX(홍대 LC TOWER B3F)','2024.07.12 ~ 2024.10.06 / 샤롯데씨어터','2024.06.18 ~ 2024.09.08 / 예스24아트원 1관','2024.07.16 ~ 2024.08.25 / 올림픽공원 내 우리금융아트홀','2024.06.18 ~ 2024.09.08 / 예스24아트원 2관','2024.07.05 ~ 2024.07.07 / YES24 LIVE HALL','2024.06.11 ~ 2024.09.01 / 예스24스테이지 3관']
        }
    };

    function bConChange(bId) {
        const content = bCon[bId];
        const contentDiv = document.querySelector('#main_content2>.container1>div');
        const images = contentDiv.querySelectorAll('img');
        const span = contentDiv.querySelectorAll('span');
        const paragraphs = contentDiv.querySelectorAll('p');
    
        // 이미지 src 변경
        images.forEach((img, index) => {
            img.src = content.images[index];
        });
        // 제목 변경
        span.forEach((s,index)=>{
            s.textContent = content.span[index];
        });
        
        // 문단 내용 변경
        paragraphs.forEach((p, index) => {
            p.textContent = content.paragraphs[index];
        });
    }
    
    // 이벤트 리스너 등록
    document.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('#main_content2>.container2>ul>li>a');
        const aOn=(Object)=>{
        const classA=document.querySelectorAll('#main_content2>.container2>ul>li>a');
        classA.forEach((event)=>{
            event.classList.remove('on');
        })
        Object.classList.add('on');
    }
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                bConChange(e.target.id);
                aOn(e.target);
            });
        });
    
        // 초기 탭 설정 (첫 번째 탭)
        bConChange('b1');
    });
    /*
    const tabCon={
        m1:{
            menu:['화제의책','외국도서','세트도서'],
            mc1:{
                imgs:['imgs/main_content/imgs/1_1.jpg','imgs/main_content/imgs/1_2.jpg','imgs/main_content/imgs/1_3.jpg',],
                paragraphs:['다섯 곡의 음악, 다섯 편의 이야기','90만 크리에이터 빅씨스','비상비상! 얼미부부의 행복 소환 노하우'],
                title:['음악소설집','느려도 좋아, 한 걸음이면 충분해','우리는 날마다 조금씩 행복해진다'],
                span:['김애란,김연수,윤성희,은희경,편혜영 저 | 프란츠','서아름(빅씨스) 저 | 비타북스(VITABOOKS)','얼미부부(김한얼·하은미) 저 | 웅진지식하우스'],
            },
            mc2:{
                imgs:['imgs/main_content/imgs/2_1.jpg','imgs/main_content/imgs/2_2.jpg','imgs/main_content/imgs/2_3.jpg',],
                paragraphs:['침이 꼴깍 넘어가는 고당도 판타지 동화','쇼펜하우어 말 수록','한정판 필사노트 에디션'],
                title:['귀귀당 1 : 시간이 녹는 줄도 모르고','마흔에 읽는 쇼펜하우어 (200쇄 기념 확장판)','원칙 PRINCIPLES'],
                span:['박현숙 글/신소현 그림 | 북스그라운드','강용수 저 | 유노북스','레이 달리오 저/고영태 역 | 한빛비즈'],
            },
            mc3:{
                imgs:['imgs/main_content/imgs/3_1.jpg','imgs/main_content/imgs/3_2.jpg','imgs/main_content/imgs/3_3.jpg',],
                paragraphs:['전 세계를 울린 바로 그 책!','라일리의 사춘기와 함께 찾아온 새로운 감정들','인생의 고통을 흘려보낸다는 것'],
                title:['A Little Life 『리틀 라이프』 원서','The Art of Inside Out 2 디즈니 픽사 「인사이드 아웃 2」 아트북 (영문판)','Go as a River'],
                span:['Yanagihara, Hanya | Anchor Books','Kelsey Mann | Chronicle Books','Shelley Read | Transworld Publishers'],
            }
        },
        m2:{
            menu:['도서','음반&DVD','전집'],
            mc1:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc2:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc3:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
        },
        m3:{
            menu:['소설/에세이','인문/사회/역사','경제경영/자기계발'],
            mc1:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc2:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc3:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            }
        },
        m4:{
            menu:['','',''],
            mc1:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc2:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc3:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            }
        },
        m5:{
            menu:['','',''],
            mc1:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc2:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc3:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            }
        },
        m6:{
            menu:['','',''],
            mc1:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc2:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc3:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            }
        },
        m7:{
            menu:['','',''],
            mc1:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc2:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc3:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            }
        },
        m8:{
            menu:['','',''],
            mc1:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc2:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            },
            mc3:{
                imgs:['','',''],
                paragraphs:['','',''],
                title:['','',''],
                span:['','','']
            }
        }
    };
    */
    /*
    const tabCon2={
            mc1:{
                imgs:['imgs/main_content/imgs/1_1.jpg','imgs/main_content/imgs/1_2.jpg','imgs/main_content/imgs/1_3.jpg',],
                paragraphs:['다섯 곡의 음악, 다섯 편의 이야기','90만 크리에이터 빅씨스','비상비상! 얼미부부의 행복 소환 노하우'],
                title:['음악소설집','느려도 좋아, 한 걸음이면 충분해','우리는 날마다 조금씩 행복해진다'],
                span:['김애란,김연수,윤성희,은희경,편혜영 저 | 프란츠','서아름(빅씨스) 저 | 비타북스(VITABOOKS)','얼미부부(김한얼·하은미) 저 | 웅진지식하우스'],
            },
            mc2:{
                imgs:['imgs/main_content/imgs/2_1.jpg','imgs/main_content/imgs/2_2.jpg','imgs/main_content/imgs/2_3.jpg',],
                paragraphs:['침이 꼴깍 넘어가는 고당도 판타지 동화','쇼펜하우어 말 수록','한정판 필사노트 에디션'],
                title:['귀귀당 1 : 시간이 녹는 줄도 모르고','마흔에 읽는 쇼펜하우어 (200쇄 기념 확장판)','원칙 PRINCIPLES'],
                span:['박현숙 글/신소현 그림 | 북스그라운드','강용수 저 | 유노북스','레이 달리오 저/고영태 역 | 한빛비즈'],
            },
            mc3:{
                imgs:['imgs/main_content/imgs/3_1.jpg','imgs/main_content/imgs/3_2.jpg','imgs/main_content/imgs/3_3.jpg',],
                paragraphs:['전 세계를 울린 바로 그 책!','라일리의 사춘기와 함께 찾아온 새로운 감정들','인생의 고통을 흘려보낸다는 것'],
                title:['A Little Life 『리틀 라이프』 원서','The Art of Inside Out 2 디즈니 픽사 「인사이드 아웃 2」 아트북 (영문판)','Go as a River'],
                span:['Yanagihara, Hanya | Anchor Books','Kelsey Mann | Chronicle Books','Shelley Read | Transworld Publishers'],
            }
    };
    */

    const tabConEnd = [
        {
            menu:['화제의책','외국도서','세트도서'],
            mc:[
                {
                    imgs:['imgs/main_content/imgs/1_1.jpg','imgs/main_content/imgs/1_2.jpg','imgs/main_content/imgs/1_3.jpg',],
                    paragraphs:['다섯 곡의 음악, 다섯 편의 이야기','90만 크리에이터 빅씨스','비상비상! 얼미부부의 행복 소환 노하우'],
                    title:['음악소설집','느려도 좋아, 한 걸음이면 충분해','우리는 날마다 조금씩 행복해진다'],
                    span:['김애란,김연수,윤성희,은희경,편혜영 저 | 프란츠','서아름(빅씨스) 저 | 비타북스(VITABOOKS)','얼미부부(김한얼·하은미) 저 | 웅진지식하우스'],
                },
                {
                    imgs:['imgs/main_content/imgs/2_1.jpg','imgs/main_content/imgs/2_2.jpg','imgs/main_content/imgs/2_3.jpg',],
                    paragraphs:['침이 꼴깍 넘어가는 고당도 판타지 동화','쇼펜하우어 말 수록','한정판 필사노트 에디션'],
                    title:['귀귀당 1 : 시간이 녹는 줄도 모르고','마흔에 읽는 쇼펜하우어 (200쇄 기념 확장판)','원칙 PRINCIPLES'],
                    span:['박현숙 글/신소현 그림 | 북스그라운드','강용수 저 | 유노북스','레이 달리오 저/고영태 역 | 한빛비즈'],
                },
                {
                    imgs:['imgs/main_content/imgs/3_1.jpg','imgs/main_content/imgs/3_2.jpg','imgs/main_content/imgs/3_3.jpg',],
                    paragraphs:['전 세계를 울린 바로 그 책!','라일리의 사춘기와 함께 찾아온 새로운 감정들','인생의 고통을 흘려보낸다는 것'],
                    title:['A Little Life 『리틀 라이프』 원서','The Art of Inside Out 2 디즈니 픽사「인사이드 아웃 2」아트북','Go as a River'],
                    span:['Yanagihara, Hanya | Anchor Books','Kelsey Mann | Chronicle Books','Shelley Read | Transworld Publishers'],
                },
            ]
        },
        {
            menu:['도서','음반&DVD','전집'],
            mc:[
                {
                    imgs:['imgs/main_content/imgs/week1_1.jpg','imgs/main_content/imgs/week1_2.jpg','imgs/main_content/imgs/week1_3.jpg',],
                    paragraphs:['','',''],
                    title:['시대예보 : 핵개인의 시대','이처럼 사소한 것들','메리골드 마음 세탁소'],
                    span:['','',''],
                },
                {
                    imgs:['imgs/main_content/imgs/week3_1.jpg','imgs/main_content/imgs/week3_2.jpg','imgs/main_content/imgs/week3_3.jpg',],
                    paragraphs:['','',''],
                    title:['IVE (아이브) - THE 2nd EP : IVE SWITCH [4종 중 1종 랜덤발송]',`플레이브 (PLAVE) - PLAVE 1st Mini Album 'ASTERUM : The Shape of Things to Come'`,`세븐틴 (SEVENTEEN) - SEVENTEEN BEST ALBUM '17 IS RIGHT HERE' [2종 중 1종 랜덤발송]`],
                    span:['','',''],
                },
                {
                    imgs:['imgs/main_content/imgs/week5_1.jpg','imgs/main_content/imgs/week5_2.jpg','imgs/main_content/imgs/week5_3.jpg',],
                    paragraphs:['','',''],
                    title:['리더십 학교가자','서울대선정 인문고전','이야기꽃할망/A급 깨끗한상품'],
                    span:['','',''],
                },
            ]
        },
        {
            menu:['소설/에세이','인문/사회/역사','경제경영/자기계발'],
            mc:[
                {
                    imgs:['imgs/main_content/imgs/eb1_1.jpg','imgs/main_content/imgs/eb1_2.jpg','imgs/main_content/imgs/eb1_3.jpg',],
                    paragraphs:['탁월한 이야기꾼 베르나르 베르베르가 빚어낸 치열한 한판','바다 물귀신 판타지! 네오픽션상 수상작','[단독] 푸른 용의 나라'],
                    title:['[세트] 퀸의 대각선 (2권)','[단독] 그들은 바다에서 왔다','인문학 명사들의 강력 추천! 용사냥꾼, 여왕, 그리고 민주주의'],
                    span:['','',''],
                },
                {
                    imgs:['imgs/main_content/imgs/eb3_1.jpg','imgs/main_content/imgs/eb3_2.jpg','imgs/main_content/imgs/eb3_3.jpg',],
                    paragraphs:['요즘 어른을 위한 최소한의 한국사','알고 싶니 마음, 심리툰 - 매운맛','친애하는 슐츠 씨'],
                    title:[`가장 쉽고 빠르게 읽는 '초 압축 한국사'`,'현직 정신의학과 전문의가 전하는 매운맛 심리툰','"얼마나 많은 차별이 무지에서 비롯되는가?"'],
                    span:['','',''],
                },
                {
                    imgs:['imgs/main_content/imgs/eb5_1.jpg','imgs/main_content/imgs/eb5_2.jpg','imgs/main_content/imgs/eb5_3.jpg',],
                    paragraphs:['똑똑한 당신은 왜 이상한 선택을 할까?','쉽게 불안해하는 당신을 위한 걱정 끊기의 기술','마인드맵 창시자 토니 부잔의 두뇌 사용 설명서'],
                    title:['[단독] 직장인을 위한 행동경제학','쓸데없는 걱정으로 준비된 체력이 소진되었습니다','당신의 뇌는 나이 들지 않는다'],
                    span:['','',''],
                },
            ]
        },
        {
            menu:['','',''],
            mc:[
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
            ]
        },
        {
            menu:['','',''],
            mc:[
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
            ]
        },
        {
            menu:['','',''],
            mc:[
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
            ]
        },
        {
            menu:['','',''],
            mc:[
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
            ]
        },
        {
            menu:['','',''],
            mc:[
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
                {
                    imgs:['','',''],
                    paragraphs:['','',''],
                    title:['','',''],
                    span:['','',''],
                },
            ]
        },
    ]
    const ctab=document.querySelectorAll('#main_content4>.li>ul>li>a');
    const ctOn=(object)=>{
        ctab.forEach((e)=>{
            e.parentElement.classList.remove('on');
        })
        object.parentElement.classList.add('on');
    }
    ctab.forEach(tab=>{
        tab.addEventListener('click',(e)=>{
            ctOn(e.target);
        });
    });
    const bold = document.querySelectorAll('#main_content4>.container1>.pa>li>p');
    const bookImgs = document.querySelectorAll('#main_content4>.container1>.imgs>a');
    let tabIndex = 0;
    let subIndex = 0;
    const tabInsertContent = (index) => {
        const subMenus = tabConEnd[index].menu;
        const Books = tabConEnd[index].mc[subIndex];
        //console.log( Books );
        subMenus.forEach((menu,index)=>{
            bold[index].textContent = menu;
        });
        Books.imgs.forEach((img, i)=>{
            bookImgs[i].querySelector('img').src = img;
        });
        Books.paragraphs.forEach((paragraphs, i)=>{
            bookImgs[i].querySelector('strong').textContent = paragraphs;
        });
        Books.title.forEach((title, i)=>{
            bookImgs[i].querySelector('p').textContent = title;
        });
        Books.span.forEach((span, i)=>{
            bookImgs[i].querySelector('span').textContent = span;
        });
    }
    tabInsertContent(tabIndex);    
    
    const pOn=(Object)=>{
        bold.forEach((event)=>{
            event.classList.remove('on');
        })
        Object.classList.add('on');
    };
    bold.forEach((tab,i)=>{
        tab.addEventListener('click',(e)=>{
            pOn(e.target);
            //tabConChange2(e.target.id);
            subIndex = e.target.getAttribute('data-index');
            tabInsertContent(tabIndex);
        })
    });
    const tabs = document.querySelectorAll('#main_content4>.li>ul>li>a');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            pOn(bold[0]);
            const targetList = e.target.parentElement;
            const sibligs = Array.from(targetList.parentElement.children);
            tabIndex = sibligs.indexOf(targetList);
            //console.log( parent, tabIndex );
            subIndex = 0;
            tabInsertContent(tabIndex);
        });
    });

    