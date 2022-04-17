const Image = (props) => {
  const { title } = props
  var link = {
    "workshop": "https://static.wixstatic.com/media/337e46_bbf5f04901ab4bbab47ad4c1cefdffb7~mv2.jpg/v1/fill/w_468,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/337e46_bbf5f04901ab4bbab47ad4c1cefdffb7~mv2.jpg",
    "educational activity": "https://static.wixstatic.com/media/337e46_d56cadb5e06d43d985fdd5babf525627~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_d56cadb5e06d43d985fdd5babf525627~mv2.jpg",
    "rental assistance": "https://static.wixstatic.com/media/337e46_3c14e2ee789a4ae8ba49017335886689~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_3c14e2ee789a4ae8ba49017335886689~mv2.jpg",
    "scholarship": "https://static.wixstatic.com/media/337e46_e5bb0c5edc5344f6bbcc09e996df8dea~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_e5bb0c5edc5344f6bbcc09e996df8dea~mv2.jpg",
    "onboarding": "https://static.wixstatic.com/media/337e46_fef086404c87457c9c012c08ccbf85eb~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_fef086404c87457c9c012c08ccbf85eb~mv2.jpg",
    "drive thru": "https://static.wixstatic.com/media/337e46_7a0e05b033894780bce2860b61d4d321~mv2.jpg/v1/fill/w_468,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/337e46_7a0e05b033894780bce2860b61d4d321~mv2.jpg",
    "home delivery": "https://static.wixstatic.com/media/337e46_e808ffce5d114107a3506801c492627e~mv2.jpg/v1/fill/w_420,h_300,al_c,lg_1,q_80,enc_auto/337e46_e808ffce5d114107a3506801c492627e~mv2.jpg",
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