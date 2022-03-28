
const Image = (props) => {
  const { title } = props
  var link = {
    "building community": "https://static.wixstatic.com/media/337e46_bbf5f04901ab4bbab47ad4c1cefdffb7~mv2.jpg/v1/fill/w_468,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/337e46_bbf5f04901ab4bbab47ad4c1cefdffb7~mv2.jpg",
    "financial literacy": "https://static.wixstatic.com/media/337e46_7d018d51ed4847d8b99675e78360260c~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_7d018d51ed4847d8b99675e78360260c~mv2.jpg",
    "english fluency": "https://static.wixstatic.com/media/337e46_7d018d51ed4847d8b99675e78360260c~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_7d018d51ed4847d8b99675e78360260c~mv2.jpg",
    "stem education": "https://static.wixstatic.com/media/337e46_d56cadb5e06d43d985fdd5babf525627~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_d56cadb5e06d43d985fdd5babf525627~mv2.jpg",
    "nutrition and health": "https://static.wixstatic.com/media/337e46_ea2b6eeaf9ea4dc5ab18e8187ad3d326~mv2.jpg/v1/fill/w_468,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/337e46_ea2b6eeaf9ea4dc5ab18e8187ad3d326~mv2.jpg",
    "violence prevention": "https://static.wixstatic.com/media/337e46_437ff201393a4f12a9427c73408db04d~mv2.jpg/v1/fill/w_468,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/337e46_437ff201393a4f12a9427c73408db04d~mv2.jpg",
    "one-on-one consultations": "https://static.wixstatic.com/media/337e46_3c14e2ee789a4ae8ba49017335886689~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_3c14e2ee789a4ae8ba49017335886689~mv2.jpg",
    "path to college": "https://static.wixstatic.com/media/337e46_e5bb0c5edc5344f6bbcc09e996df8dea~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_e5bb0c5edc5344f6bbcc09e996df8dea~mv2.jpg",
    "giving back": "https://static.wixstatic.com/media/337e46_0e9f9dfbc90546b786c8c9fc56c75fe2~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_0e9f9dfbc90546b786c8c9fc56c75fe2~mv2.jpg",
    "promoting academics": "https://static.wixstatic.com/media/337e46_c895f450dbbf45f2833fac78eb1a7dd8~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_c895f450dbbf45f2833fac78eb1a7dd8~mv2.jpg",
    "writing": "https://static.wixstatic.com/media/337e46_6db853c56eae4d298eed3f7fb7f9e2fa~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_6db853c56eae4d298eed3f7fb7f9e2fa~mv2.jpg",
    "computer education": "https://static.wixstatic.com/media/337e46_fef086404c87457c9c012c08ccbf85eb~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_fef086404c87457c9c012c08ccbf85eb~mv2.jpg",
    "parenting effectiveness": "https://static.wixstatic.com/media/337e46_7a0e05b033894780bce2860b61d4d321~mv2.jpg/v1/fill/w_468,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/337e46_7a0e05b033894780bce2860b61d4d321~mv2.jpg",
    "life skills classes": "https://static.wixstatic.com/media/337e46_0f94b9dfb07d49f7b492896f671c99d7~mv2.jpg/v1/fill/w_468,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/337e46_0f94b9dfb07d49f7b492896f671c99d7~mv2.jpg",
    "continuing in the homes": "https://static.wixstatic.com/media/337e46_e808ffce5d114107a3506801c492627e~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_e808ffce5d114107a3506801c492627e~mv2.jpg",
    "community collaborations": "https://static.wixstatic.com/media/337e46_1445c2f44f9a4d148d54760fe5663168~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_1445c2f44f9a4d148d54760fe5663168~mv2.jpg",
  }

  return (
    <div>
      <img
      class="image"
      src={link[title]}
      />
      {console.log(title)}
    </div>
  )
}

export default Image;